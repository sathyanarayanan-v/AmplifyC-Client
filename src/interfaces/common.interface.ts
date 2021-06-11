import { Commit } from 'vuex'

export interface ICommit {
  commit: Commit
}

export interface INotification {
  id: string
  group: string
  title: string
  text: string
  time?: string
  data: {
    color: string
  }
}
