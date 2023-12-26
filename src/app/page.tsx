import { Switch } from '@mui/material'
import CustomSlider from '@/src/components/CustomSlider'
import type { NextPage } from 'next'
import Image from 'next/image'
const label = { inputProps: { "aria-label": "Switch demo" } };
const Home: NextPage = (): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <CustomSlider warning={true} />
      <CustomSlider warning={false} />
    </main>
  )
}
export default Home