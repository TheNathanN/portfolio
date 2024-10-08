import CryptoImages from "../components/portfolio/image-components/crypto-images"
import LofiImages from "../components/portfolio/image-components/lofi-images"
import MessageImages from "../components/portfolio/image-components/message-images"
import NashImages from "../components/portfolio/image-components/nash-images"
import PayImages from "../components/portfolio/image-components/pay-images"
import PomodoroImages from "../components/portfolio/image-components/pomodoro-img"
import { createListFromArray } from "../helpers/helperFunctions"
import {
  _CryptoTrackerLabels,
  _LofiRadioLabels,
  _MessageMeLabels,
  _NashLabels,
  _PayApiLabels,
  _PomodoroLabels,
} from "../helpers/helperVariables"
import { ProjectInfo } from "../helpers/types"

const directedByNash: ProjectInfo = {
  name: "Directed By Nash",
  details: createListFromArray(_NashLabels),
  liveLink: "https://directedbynash.com/",
  imageComponent: NashImages(),
}

const lofiRadioInfo: ProjectInfo = {
  name: "Lofi Radio",
  details: createListFromArray(_LofiRadioLabels),
  liveLink: "https://lofiradio.vercel.app/",
  repoLink: "https://github.com/TheNathanN/lofi-radio",
  imageComponent: LofiImages(),
}

const payApiInfo: ProjectInfo = {
  name: "Pay API Website",
  details: createListFromArray(_PayApiLabels),
  liveLink: "https://payapi-project.vercel.app/",
  repoLink: "https://github.com/TheNathanN/payapi",
  imageComponent: PayImages(),
}

const cryptoTrackerInfo: ProjectInfo = {
  name: "Crypto Tracker",
  details: createListFromArray(_CryptoTrackerLabels),
  liveLink: "https://crypto-tracker-nathan.vercel.app/",
  repoLink: "https://github.com/TheNathanN/crypto-tracker",
  imageComponent: CryptoImages(),
}

const messageInfo: ProjectInfo = {
  name: "Message Me",
  details: createListFromArray(_MessageMeLabels),
  liveLink: "https://messageme-app.vercel.app/",
  repoLink: "https://github.com/TheNathanN/message-me",
  imageComponent: MessageImages(),
}

const pomodoroInfo: ProjectInfo = {
  name: "Pomodoro Timer",
  details: createListFromArray(_PomodoroLabels),
  liveLink: "https://pomodoro-app-nathan.vercel.app/",
  repoLink: "https://github.com/TheNathanN/pomodoro-app",
  imageComponent: PomodoroImages(),
}

export const projectsData = [
  directedByNash,
  lofiRadioInfo,
  payApiInfo,
  cryptoTrackerInfo,
  messageInfo,
  pomodoroInfo,
]
