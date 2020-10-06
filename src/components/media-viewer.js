import React, { useCallback, useEffect } from 'react'

import { styled } from './theme'
import { ChevronLeft, ChevronRight, Times } from './icon'

export const STATE = {
  CLOSED: 'closed',
  OPENED: 'opened',
}

const StyledContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledBackdrop = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  backgroundColor: '#000000',
  opacity: '0.5',
  zIndex: 100,
})

const StyledContent = styled('div', {
  position: 'relative',
  maxWidth: '640px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 200,
})

const StyledCloseButton = styled('button', ({ $theme }) => ({
  position: 'absolute',
  background: 'none',
  border: 'none',
  right: $theme.sizings.scale7,
  top: $theme.sizings.scale5,
  color: '#FFFFFF',
  padding: $theme.sizings.scale1,
  margin: '0px',
  display: 'flex',
  zIndex: 200,
}))

const StyledNavButton = styled('button', ({ $theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#FFFFFF',
  border: 'none',
  borderRadius: '9999px',
  width: '38px',
  height: '38px',
  padding: '0px',
  zIndex: 200,
  margin: $theme.sizings.scale2,
  [$theme.breakpoints.medium]: {
    margin: $theme.sizings.scale5,
  },
}))

export const MediaViewer = ({
  children,
  state,
  onStateChange,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (event) => {
      switch (event.keyCode) {
        case 27: // escape
          onStateChange(STATE.CLOSED)
          break
        case 37: // left arrow
          onPrev()
          break
        case 39: // right arrow
          onNext()
          break
        default:
      }
    },
    [onStateChange, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (state === STATE.CLOSED) {
    return null
  }

  return (
    <StyledContainer>
      <StyledBackdrop onClick={() => onStateChange(STATE.CLOSED)} />
      <StyledCloseButton onClick={() => onStateChange(STATE.CLOSED)}>
        <Times />
      </StyledCloseButton>
      <StyledNavButton onClick={onPrev}>
        <ChevronLeft style={{ marginLeft: '-2px' }} />
      </StyledNavButton>
      <StyledContent>{children}</StyledContent>
      <StyledNavButton onClick={onNext}>
        <ChevronRight style={{ marginRight: '-2px' }} />
      </StyledNavButton>
    </StyledContainer>
  )
}
