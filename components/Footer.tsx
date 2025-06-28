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
            Türkiye'nin önde gelen hukuk bürolarından biri olarak, müvekkillerimize en kaliteli hukuki hizmeti sunmayı
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
            <li>
              <a href="#">Ticaret Hukuku</a>
            </li>
            <li>
              <a href="#">İş Hukuku</a>
            </li>
            <li>
              <a href="#">Aile Hukuku</a>
            </li>
            <li>
              <a href="#">Ceza Hukuku</a>
            </li>
            <li>
              <a href="#">İcra İflas Hukuku</a>
            </li>
            <li>
              <a href="#">Arabuluculuk</a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Kurumsal</h3>
          <ul>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Ekibimiz</a>
            </li>
            <li>
              <a href="#">Kariyer</a>
            </li>
            <li>
              <a href="#">Haberler</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
            <li>
              <a href="#">Gizlilik Politikası</a>
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
