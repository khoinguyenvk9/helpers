export const phonePattern = {
  value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  message: "Số điện thoại không hợp lệ",
};

export const phoneInputPattern = {
  value: /^\+(?:[0-9]●?){6,14}[0-9]$/,
  message: "Please enter a valid phone number",
};

export const phoneMethod = (e: any) => {
  const phoneRegexKeyPress = /[0-9]+/g;
  if (!phoneRegexKeyPress.test(e.key)) {
    e.preventDefault();
  }
};

export const emailPattern = {
  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  message: "Email không hợp lệ",
};

export const validateUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
};

export const validatePhoneS = () => {
  return null;
};
