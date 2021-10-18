import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const lngs: any = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
  }
  const { t, i18n } = useTranslation()

  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <Trans i18nKey="description.part1">
        Edit <code>src/App.js</code> and save to reload.
      </Trans>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <div>ааа</div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('description.part2')}
      </a>
    </div>
  )
}
