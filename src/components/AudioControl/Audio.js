// AudioLanguageDropdown.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function AudioLanguageDropdown() {
  const { t, i18n } = useTranslation();

  const changeAudioLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Add logic to change the audio language in your application
  };

  return (
    <div>
      <label>{t('audioLanguage')}</label>
      <select onChange={(e) => changeAudioLanguage(e.target.value)}>
        <option value="fr">{t('Hindi')}</option>
        <option value="fr">{t('Marathi')}</option>
        <option value="en">{t('english')}</option>
        <option value="fr">{t('french')}</option>
        {/* Add more options for other languages */}
      </select>
    </div>
  );
}

export default AudioLanguageDropdown;
