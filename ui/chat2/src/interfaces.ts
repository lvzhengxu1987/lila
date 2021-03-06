export interface ChatOpts {
  data: ChatData
  writeable: boolean
  kobold: boolean
  timeout: boolean
  parseMoves: boolean
  public: boolean
  permissions: Permissions
  timeoutReasons?: ModerationReason[]
  i18n: Object
  preset?: string
  noteId?: string
}

interface ChatData {
  id: string
  name: string
  lines: Array<Line>
  userId?: string
  loginRequired: boolean
  restricted: boolean
}

export interface Line {
  u?: string // username
  t: string // text
  d: boolean // deleted
  c?: string // color
  r?: boolean // troll
}

interface Permissions {
  timeout?: boolean
  shadowban?: boolean
}

export type Tab = 'discussion' | 'note'

type Trans = any

export interface Ctrl {
  data: ChatData
  opts: ChatOpts
  vm: ViewModel
  preset: PresetCtrl
  note?: NoteCtrl
  moderation?: ModerationCtrl
  post(text: string): boolean
  trans: Trans
  setTab(tab: Tab): void
  setEnabled(v: boolean): void
}

export interface ViewModel {
  tab: Tab
  enabled: boolean
  placeholderKey: string
  loading: boolean
  timeout: boolean
  writeable: boolean
}

export interface PresetCtrl {
  group(): string | undefined
  said(): string[]
  setGroup(group: string): void
  post(preset: Preset): void
}

type PresetKey = string
type PresetText = string

export interface Preset {
  key: PresetKey
  text: PresetText
}

export interface PresetGroups {
  start: Preset[]
  end: Preset[]
  [key: string]: Preset[]
}

export interface PresetOpts {
  initialGroup?: string
  redraw: Redraw
  post(text: string): boolean
}

export interface NoteOpts {
  id: string
  trans: Trans
  redraw: Redraw
}

export interface NoteCtrl {
  id: string
  trans: Trans
  text(): string
  fetch(): void
  post(text: string): void
}

export interface ModerationOpts {
  reasons: ModerationReason[]
  permissions: Permissions
  send(typ: string, data: any): void
  redraw: Redraw
}

export interface ModerationCtrl {
  loading(): boolean
  data(): ModerationData | undefined
  reasons: ModerationReason[]
  permissions: Permissions
  open(username: string): void
  close(): void
  timeout(reason: ModerationReason): void
  shadowban(): void
}

export interface ModerationData {
  id: string
  username: string
  games: number
  troll: boolean
  engine: boolean
  booster: boolean
  history: ModerationHistoryEntry[]
}

export interface ModerationReason {
  key: string
  name: string
}

interface ModerationHistoryEntry {
  reason: ModerationReason
  mod: string
  date: number
}

export type Redraw = () => void
