import React, { useState } from 'react'

import { styled } from './theme'
import { MediaViewer, STATE as MEDIA_VIEWER_STATE } from './media-viewer'

export const StyledMediaGrid = styled('div', ({ $theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(3, 1fr)`,
  gridGap: $theme.sizings.scale2,
  [$theme.breakpoints.medium]: {
    gridGap: $theme.sizings.scale7,
  },
}))

export const StyledMediaGridItem = styled('button', {
  width: '100%',
  height: '0px',
  overflow: 'hidden',
  background: 'none',
  border: 'none',
  margin: 0,
  paddingBottom: '100%',
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
})

export const MediaGrid = ({ medias = [] }) => {
  const [index, setMediaIndex] = useState(null)
  const [viewerState, setViewerState] = useState(MEDIA_VIEWER_STATE.CLOSED)

  const handleClick = (index) => {
    setViewerState(MEDIA_VIEWER_STATE.OPENED)
    setMediaIndex(index)
  }

  const handleNext = () => {
    const nextIndex = index + 1 >= medias.length ? index : index + 1
    setMediaIndex(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = index - 1 < 0 ? index : index - 1
    setMediaIndex(prevIndex)
  }

  return (
    <>
      <StyledMediaGrid>
        {medias.map((media, index) => (
          <StyledMediaGridItem key={index} onClick={() => handleClick(index)}>
            {media}
          </StyledMediaGridItem>
        ))}
      </StyledMediaGrid>
      <MediaViewer
        state={viewerState}
        onStateChange={setViewerState}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {medias[index]}
      </MediaViewer>
    </>
  )
}
