import React from 'react';
import styles from './FigmaEmbed.module.css';

const FigmaEmbed = ({ figmaUrl }) => {
  if (!figmaUrl) return null;

  return (
    <div className={styles.figmaContainer}>
      <div className={styles.figmaWrapper}>
        <iframe
          src={figmaUrl}
          className={styles.figmaEmbed}
          allowFullScreen
          title="Project Figma Design"
        />
      </div>
    </div>
  );
};

export default FigmaEmbed; 