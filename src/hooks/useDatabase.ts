import { OnlineGameProps } from '../interfaces'
import { database } from '../services'

export interface UpdateGameProps {
  id: string
  game: OnlineGameProps
}

export const useDatabase = () => {
  const createGame = async (game: OnlineGameProps) => {
    const gameRef = database.ref('games')

    return await gameRef.push(game)
  }

  const updateGame = async ({ id, game }: UpdateGameProps) => {
    const gameRef = database.ref(`games/${id}`)

    return await gameRef.update(game)
  }

  const getGameRefById = (id: string) => {
    return database.ref(`games/${id}`)
  }

  const leaveGame = (id: string) => {
    const gameRef = database.ref(`games/${id}`)

    gameRef.onDisconnect().remove()
    gameRef.remove()
  }

  return { createGame, updateGame, getGameRefById, leaveGame }
}
