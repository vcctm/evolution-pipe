import * as S from './styles'
import Lottie from 'react-lottie'
import * as newGameJson from '../../assets/lottie/new-game-lottie.json'
import * as arrowDownJson from '../../assets/lottie/arrow-down.json'

const NewGame = () => {
  const newGameJsonOptions = {
    loop: true,
    autoplay: true,
    animationData: newGameJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const newGameDownOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowDownJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <>
      <Lottie options={newGameJsonOptions} height={400} width={400} />
      <S.NewGame>Start a new game!</S.NewGame>
      <Lottie options={newGameDownOptions} height={200} width={200} />
    </>
  )
}

export default NewGame
