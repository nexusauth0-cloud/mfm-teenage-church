import type { ComponentType } from 'react'
import { Camera, ImageIcon, Music, Flame, Heart, Theater, Settings, Crown, Play, FileText, Users } from 'lucide-react'

export const placeholderIcons: Record<string, ComponentType<{ className?: string }>> = {
  camera: Camera,
  music: Music,
  flame: Flame,
  heart: Heart,
  theater: Theater,
  settings: Settings,
  crown: Crown,
  image: ImageIcon,
  play: Play,
  file: FileText,
  users: Users,
}