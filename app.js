const params = {
  lines: [
    {
      background: '#00F',
      updateTime: 1000,
      elements: [
        {
          background: '#DC143C',
          width: 25
        },
        {
          background: '#00FF00',
          width: 50
        },
        {
          background: '#00F',
          width: 25
        }
      ]
    },
    {
      background: '#DC143C',
      updateTime: 1000,
      elements: [
        {
          background: '#00F',
          width: 25
        },
        {
          background: '#DC143C',
          width: 50
        },
        {
          background: '#00FF00',
          width: 25
        }
      ]
    },
    {
      background: '#00FF00',
      updateTime: 1000,
      elements: [
        {
          background: '#00F',
          width: 25
        },
        {
          background: '##00FF00',
          width: 50
        }
      ]
    }
  ]
}

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const createSubElement = ({ background, width, updateTime }) => {
  const elDiv = document.createElement('div')
  elDiv.style.cssText = `background-color:${background};width:${width}%;height:100%;`
  setInterval(() => {
    elDiv.style.backgroundColor = generateColor()
  }, updateTime)
  return elDiv
}

const createLine = ({ heightLine, background, elements, updateTime }) => {
  const fragment = document.createDocumentFragment()
  const elDiv = document.createElement('div')
  elDiv.style.cssText = `background-color:${background};height:${heightLine}px;display: flex`

  for (const element of elements) {
    fragment.append(createSubElement({ ...element, updateTime }))
  }
  elDiv.append(fragment)

  return elDiv
}

const renderLines = ({ lines }) => {
  const pageHeight = document.documentElement.clientHeight
  const heightLine = lines.length ? pageHeight / lines.length : pageHeight
  const fragment = document.createDocumentFragment()

  for (const line of lines) {
    fragment.appendChild(createLine({ ...line, heightLine }))
  }

  document.body.append(fragment)
}

window.addEventListener('DOMContent​Loaded', renderLines(params))
