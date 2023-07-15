import { OpenaiApiClient } from '../src/api/OpenaiApiClient'

// example
;(async () => {
  const openai = new OpenaiApiClient({
    // logAllEvents: true,
  })
  openai.cacheDefaults.overwrite = true

  console.log(
    await openai.proofread('English', 'I no have more moneyy.', {
      cache: { overwrite: true },
    }),
  )
  console.log(
    await openai.proofread('Java', `System.out.println("Hello")`, {
      cache: { overwrite: true },
    }),
  )
})().catch(console.error)
