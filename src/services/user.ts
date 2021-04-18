import github from "@/apis/github"

export const getUserProfile = (token: string) => {
  return github.getUserProfile(token)
}

export default {
  getUserProfile
}