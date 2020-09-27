import {
  computed,
  ref,
  toRef,
  inject
} from 'vue'

export function useDisplayMode () {
  const devModeRef = ref(
    localStorage.getItem('mode') ? localStorage.getItem('mode') : 'debug'
  )
  return computed({
    get () {
      return devModeRef.value
    },
    set (value) {
      devModeRef.value = value
      localStorage.setItem('mode', value)
    }
  })
}

export const displayModeRef = useDisplayMode()

export function useSiteTheme () {
  return toRef(inject('SiteProvider'), 'theme')
}

export function useSiteLang () {
  return toRef(inject('SiteProvider'), 'lang')
}

export const envRef = ref(process.env.NODE_ENV)
