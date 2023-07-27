# Overview 

1. nonAccentVietnameseName

    ### Function
  
    ``` ts
    export const nonAccentVietnameseName = (
      name: string,
      removeNumber = true,
      transform?: "toUpperCase" | "toLowerCase"
    ) => {
      if (removeNumber) {
        name = name.replace(/[0-9]/g, "");
      }
      name = name
        ?.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
      if (transform == "toUpperCase") name = name?.toUpperCase();
      if (transform == "toLowerCase") name = name?.toLowerCase();
      return name;
    };
    ```

    ### example

    ```
    "Nguyễn văn Khôi" => nguyen van khoi
    ```

2. 
