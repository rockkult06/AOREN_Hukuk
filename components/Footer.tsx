"use client"

import type React from "react"
import styled from "styled-components"

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

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>AOREN Hukuk Bürosu</h3>
          <p>
            Yüksek etki yaratan hukuk kadromuzla, müvekkillerimize en kaliteli hukuki hizmeti sunmayı
            hedefliyoruz.
          </p>
          <p>
            <strong>Adres:</strong>
            <br />
            Atatürk Bulvarı No: 123
            <br />
            Çankaya/Ankara
          </p>
        </FooterSection>

        <FooterSection>
          <h3>İletişim</h3>
          <p>
            <strong>Telefon:</strong> +90 312 123 45 67
          </p>
          <p>
            <strong>Faks:</strong> +90 312 123 45 68
          </p>
          <p>
            <strong>E-posta:</strong> info@aoren.com.tr
          </p>
          <p>
            <strong>Çalışma Saatleri:</strong>
            <br />
            Pazartesi - Cuma: 09:00 - 18:00
            <br />
            Cumartesi: 09:00 - 13:00
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Hizmetlerimiz</h3>
          <ul>
            <li>Ticaret Hukuku</li>
            <li>İş Hukuku</li>
            <li>Aile Hukuku</li>
            <li>Ceza Hukuku</li>
            <li>İcra İflas Hukuku</li>
            <li>Arabuluculuk</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Kurumsal</h3>
          <ul>
            <li>
              <a href="#team">Ekibimiz</a>
            </li>
            <li>
              <a href="#expertise">Uzmanlık Alanlarımız</a>
            </li>
            <li>
              <a href="#about">Hakkımızda</a>
            </li>
            <li>
              <a href="#offices">Ofislerimiz</a>
            </li>
            <li>
              <a href="#digital">AOREN Dijital Hizmetleri</a>
            </li>
            <li>
              <a href="#responsibility">Kurumsal Sosyal Sorumluluk</a>
            </li>
            <li>
              <a href="#careers">AOREN'de Kariyer</a>
            </li>
            <li>
              <a href="#contact">İletişim</a>
            </li>
          </ul>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>© 2024 AOREN Hukuk Bürosu. Tüm hakları saklıdır. | Ankara Barosu'na kayıtlı avukatlık bürosu</p>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
