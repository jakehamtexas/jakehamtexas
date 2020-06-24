<template>
  <div @click="download" class="download-btn">
    <span class="download-btn__text">Download</span>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import JsPdf from "jspdf";

const documentWidthInPx = 900;
const documentHeightInPx = 980;
const copyResumeElAndAppendToBody = () => {
  const resumeEl = document.getElementById("resume");
  const copiedEl = resumeEl.cloneNode(true);
  copiedEl.setAttribute("id", "resume-copy");
  document.body.appendChild(copiedEl);
};

const getPrintableElement = () => {
  const printableEl = document.getElementById("resume-copy");
  return printableEl;
};

const getPrintableElementWithPrintableState = color => {
  const printableEl = getPrintableElement();
  printableEl.style.width = `${documentWidthInPx}px`;
  const internalElements = printableEl.getElementsByTagName("*");
  Array.from(internalElements).forEach(({ style }) => (style.color = "black"));
  const getFirstWithClassName = className => {
    const [first] = Array.from(printableEl.getElementsByClassName(className));
    return first;
  };
  const skillsEl = getFirstWithClassName("skills");
  skillsEl.style.marginTop = "75px";
  const downloadButtonEl = getFirstWithClassName("download-btn");
  downloadButtonEl.style.display = "none";
  return printableEl;
};

const getPrintableCanvas = async () => {
  const printableEl = getPrintableElementWithPrintableState();
  const canvas = await html2canvas(printableEl);
  return canvas;
};

const getDrawImageArgs = pageNumber => {
  const sX = 0;
  const sY = documentHeightInPx * pageNumber;
  const sWidth = documentWidthInPx;
  const sHeight = documentHeightInPx;
  const dX = 0;
  const dY = 0;
  const dWidth = documentWidthInPx;
  const dHeight = documentHeightInPx;
  return { sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight };
};

const getOnePageCanvas = () => {
  const onePageCanvas = document.createElement("canvas");
  onePageCanvas.setAttribute("width", documentWidthInPx);
  onePageCanvas.setAttribute("height", documentHeightInPx);
  return onePageCanvas;
};

const saveResumeAsPdfWithPagination = async () => {
  const canvas = await getPrintableCanvas();
  const printableEl = getPrintableElement();
  const pdf = new JsPdf("p", "pt", "letter");

  const hasRemainingPages = pageNumber =>
    pageNumber <= printableEl.clientHeight / documentHeightInPx;
  for (let pageNumber = 0; hasRemainingPages(pageNumber); pageNumber++) {
    const {
      sX,
      sY,
      sWidth,
      sHeight,
      dX,
      dY,
      dWidth,
      dHeight
    } = getDrawImageArgs(pageNumber);

    const onePageCanvas = getOnePageCanvas();
    const ctx = onePageCanvas.getContext("2d");
    ctx.drawImage(canvas, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

    const canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

    const width = onePageCanvas.width;
    const height = onePageCanvas.clientHeight;

    if (pageNumber > 0) {
      pdf.addPage(612, 791);
    }
    pdf.setPage(pageNumber + 1);
    pdf.addImage(canvasDataURL, "PNG", 20, 40, width * 0.62, height * 0.62);
  }
  pdf.save("Jake Hamilton - Resume.pdf");
};

const removedCopiedEl = width => {
  const printableElement = getPrintableElement();
  document.body.removeChild(printableElement);
};

export default {
  methods: {
    async download() {
      copyResumeElAndAppendToBody();
      await saveResumeAsPdfWithPagination();
      removedCopiedEl();
    }
  }
};
</script>
<style lang="scss">
.download-btn {
  cursor: pointer;

  margin-right: 15px;

  color: $primary;

  $downloadBtnHeight: 50px;
  height: $downloadBtnHeight;
  line-height: $downloadBtnHeight;
  width: 120px;

  border-radius: 15px;

  text-align: center;

  background: linear-gradient(to left, #fff 50%, $primary 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.6s ease;
  &:hover {
    background-position: left bottom;
    color: #fff;
  }
  .download-btn__text {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
