import { useEffect, useRef } from 'react'

interface Props {
  largeScreen: boolean
}

export default function Banner({ largeScreen }: Props): JSX.Element {
  const banner = useRef<any>()

  const display = largeScreen ? 'block' : 'none'

  const atOptions = {
    key: '89411d2181bd1c29e93960c5233006cd',
    format: 'iframe',
    height: 60,
    width: 468,
    params: {}
  }
  useEffect(() => {
    if (!banner.current?.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

      if (banner.current) {
        banner.current.append(conf)
        banner.current.append(script)
      }
    }
  }, [])

  return <div ref={banner} style={{ display: display }}></div>
}
