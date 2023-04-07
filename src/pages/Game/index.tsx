import React from 'react'

import { Container, Title } from '../../components'
import { Avatar } from '../../components/Avatar'
import { useOfflineGame } from '../../hooks'
import { Board, EndGameModal } from './components'
import { Content } from './styles'
import { Stack } from '@mui/material'

export const Game: React.FC = () => {
  const { game, updateBoardAndTurn, handleRestartGame } = useOfflineGame()

  return (
    <Container>
      <Title padding='0 0 40px 0'>Jogo da Velha</Title>

      <Content>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Stack spacing={3} justifyContent='center' alignItems='center'>
            <Avatar symbol='x' isMyTurn={game.turn === 'x'} />
            {game.turn === 'x' && (
              <Title fontSize={20} fontWeight='700'>
                Sua vez
              </Title>
            )}
          </Stack>
          <Board onClick={updateBoardAndTurn} board={game.board} />
          <Stack spacing={3} justifyContent='center' alignItems='center'>
            <Avatar symbol='o' isMyTurn={game.turn === 'o'} isSecondPlayer />
            {game.turn === 'o' && (
              <Title fontSize={20} fontWeight='700'>
                Sua vez
              </Title>
            )}
          </Stack>
        </Stack>
      </Content>

      <EndGameModal
        title={
          game.hasWinner ? `O Jogador "${game.hasWinner}" venceu` : 'Deu velha'
        }
        isOpen={!!game.isGameOver || !!game.hasWinner}
        onClose={handleRestartGame}
      />
    </Container>
  )
}
