import { Commit } from 'vuex'

export interface ICommit {
  commit: Commit
}

export interface INotification {
  group: string
  title: string
  text: string
  time?: string
}
