import { ref } from 'vue'

interface Size {
  width: number
}

export const watchSize = ref<Size>({ width: 0 })

export const onResize = (size: Size) => {
  watchSize.value = size
}
