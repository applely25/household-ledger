export const formatNumber = (input) => {
  const num = Number(input);

  if (isNaN(num)) {
    throw new TypeError(
      "입력값은 숫자 또는 숫자로 변환 가능한 문자열이어야 합니다."
    );
  }

  return num.toLocaleString("en-US");
};
