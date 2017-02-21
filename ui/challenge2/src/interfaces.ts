export interface ChallengeOpts {
  data?: ChallengeData
  show: () => void
  setCount: (nb: number) => void
  pulse: () => void
}

export interface Ctrl {
  update(data: ChallengeData): void
  data(): ChallengeData | undefined
  trans: Trans | undefined
  initiating(): boolean
  reloading(): boolean
}

type ChallengeStatus = 'created' | 'offline' | 'canceled' | 'declined' | 'accepted';
type ChallengeDirection = 'in' | 'out';
type FEN = string;

export interface ChallengeUser {
  id: string
  name: string
  rating: number
  provisional?: boolean
  title?: string
}

export interface TimeControl {
  type: 'clock' | 'correspondence' | 'unlimited';
  show?: string;
  daysPerTurn?: number;
  limit: number;
  increment: number;
}

export interface Challenge {
  id: string
  direction: ChallengeDirection
  status: ChallengeStatus
  challenger?: ChallengeUser
  destUser?: ChallengeUser
  variant: Variant
  initialFen: FEN
  rated: boolean
  timeControl: TimeControl
  color: Color
  perf: {
    icon: string
    name: string
  },
  declined?: boolean
}

export interface ChallengeData {
  in: Array<Challenge>
  out: Array<Challenge>
  i18n?: {
    [key: string]: string
  }
}

export type Redraw = () => void