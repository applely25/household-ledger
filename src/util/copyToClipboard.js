function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("계좌 번호 복사 성공!");
      })
      .catch((err) => {
        console.error("클립보드 복사 실패:", err);
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      alert("계좌 번호 복사 성공!");
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
    document.body.removeChild(textArea);
  }
}

export default copyToClipboard;
