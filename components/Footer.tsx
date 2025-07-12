"use client"

import type React from "react"
import styled from "styled-components"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 60px 40px 30px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px 20px 20px;
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`

const FooterSection = styled.div`
  h3 {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: white;
  }

  p, li {
    font-size: 0.9em;
    line-height: 1.6;
    color: #ccc;
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`

const Copyright = styled.div`
  border-top: 1px solid #444;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 0.85em;
`

const BarLogoRow = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 32px;
  align-items: center;
`;

const BarLogoBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(255,255,255,0.25);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px 0 rgba(222,165,130,0.18);
  }
`;

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection style={{gridColumn: '1/2'}}>
          <BarLogoRow>
            <a href="https://rak-stuttgart.de/" target="_blank" rel="noopener noreferrer">
              <BarLogoBox>
                <Image src="/f1.jpg" alt="RAK Stuttgart" width={44} height={44} style={{objectFit:'contain', borderRadius: '16px'}} />
              </BarLogoBox>
            </a>
            <a href="https://www.ccbe.eu/" target="_blank" rel="noopener noreferrer">
              <BarLogoBox>
                <Image src="/f2.jpg" alt="CCBE" width={44} height={44} style={{objectFit:'contain', borderRadius: '16px'}} />
              </BarLogoBox>
            </a>
            <a href="https://www.ibanet.org/" target="_blank" rel="noopener noreferrer">
              <BarLogoBox>
                <Image src="/f3.jpg" alt="IBA" width={44} height={44} style={{objectFit:'contain', borderRadius: '16px'}} />
              </BarLogoBox>
            </a>
            <a href="https://www.ankarabarosu.org.tr/" target="_blank" rel="noopener noreferrer">
              <BarLogoBox>
                <Image src="/f4.jpg" alt="Ankara Barosu" width={44} height={44} style={{objectFit:'contain', borderRadius: '16px'}} />
              </BarLogoBox>
            </a>
          </BarLogoRow>
          <h3>{t('footer.company.title')}</h3>
          <p>
            {t('footer.company.description')}
          </p>
          <p>
            <strong>{t('footer.company.address')}:</strong>
            <br />
            {t('footer.company.addressText')}
          </p>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.contact.title')}</h3>
          <p>
            <strong>{t('footer.contact.phone')}:</strong> +90 312 123 45 67
          </p>
          <p>
            <strong>{t('footer.contact.fax')}:</strong> +90 312 123 45 68
          </p>
          <p>
            <strong>{t('footer.contact.email')}:</strong> info@aoren.eu
          </p>
          <p>
            <strong>{t('footer.contact.hours')}:</strong>
            <br />
            {t('footer.contact.weekdays')}
            <br />
            {t('footer.contact.saturday')}
          </p>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.services.title')}</h3>
          <ul>
            <li>{t('footer.services.commercial')}</li>
            <li>{t('footer.services.labor')}</li>
            <li>{t('footer.services.family')}</li>
            <li>{t('footer.services.criminal')}</li>
            <li>{t('footer.services.execution')}</li>
            <li>{t('footer.services.mediation')}</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.corporate.title')}</h3>
          <ul>
            <li>
              <a href="#team">{t('footer.corporate.team')}</a>
            </li>
            <li>
              <a href="#expertise">{t('footer.corporate.expertise')}</a>
            </li>
            <li>
              <a href="#about">{t('footer.corporate.about')}</a>
            </li>
            <li>
              <a href="#offices">{t('footer.corporate.offices')}</a>
            </li>
            <li>
              <a href="#digital">{t('footer.corporate.digital')}</a>
            </li>
            <li>
              <a href="#responsibility">{t('footer.corporate.responsibility')}</a>
            </li>
            <li>
              <a href="#careers">{t('footer.corporate.careers')}</a>
            </li>
            <li>
              <a href="#contact">{t('footer.corporate.contact')}</a>
            </li>
          </ul>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>{t('footer.copyright')}</p>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
