import { useEffect, useState } from 'react'

import { GameProps, OnlineGameProps, PlaceOptions } from '../interfaces'
import { useDatabase } from './useDatabase'
import { useGame } from './useGame'

export interface UseOnlineGameReturn {
  game: OnlineGameProps
  updateBoardAndTurn: (place: PlaceOptions) => void
  handleRestartGame: () => void
}

export const useOnlineGame = (id?: string): UseOnlineGameReturn => {
  const defaultGame: GameProps = {
    board: ['', '', '', '', '', '', '', '', ''],
    turn: 'x'
  }

  const [game, setGame] = useState<OnlineGameProps>(defaultGame)
  const { getGameRefById, updateGame } = useDatabase()

  const updateGameState = async (gameState: GameProps) => {
    if (!game || !game.firstPlayer || !game.secondPlayer || !id) return

    await updateGame({
      id,
      game: {
        firstPlayer: {
          ...game.firstPlayer
        },
        secondPlayer: {
          ...game.secondPlayer
        },
        ...gameState
      }
    })
  }

  useEffect(() => {
    if (!id) return

    const gameRef = getGameRefById(id)

    gameRef.on('value', (snapshot) => {
      const game = snapshot.val() as OnlineGameProps
      setGame(game)
    })

    gameRef.onDisconnect().remove()

    return () => {
      gameRef.off()
    }
  }, [game, id])

  return useGame({ game, setGame: updateGameState })
}
