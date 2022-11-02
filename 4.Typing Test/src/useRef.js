import { useRef } from "react";

export default function useInputRef() {
  const inputRef = useRef(null)

  return {inputRef}
}