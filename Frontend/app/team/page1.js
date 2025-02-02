'use client'
import React, { useState } from 'react'
import styles from './TeamPage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Khobaib Akmal",
      role: "Gen. Secretary",
      phone: "+91 8869816786",
      img: "/council/khobaib.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 2,
      name: "shivang Dwivedi",
      role: "Treasurer",
      phone: "+91 6392199393",
      img: "/council/shivang.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 3,
      name: "Ishan Chugh",
      role: "Jt. Secretary",
      phone: "+91 9267952938",
      img: "/council/ishan.jpg",
    },
    {
      id: 4,
      name: "Vaishnavi Saraswat",
      role: "Jt. Secretary",
      phone: "+91 9650461478",
      img: "/council/vaishnavi.jpg",
    },
    {
      id: 5,
      name: "Tasneem Ahmed",
      role: "Jt. Secretary",
      phone: "+91 8376031863",
      img: "/council/tasneem.jpg",
    },
    {
      id: 6,
      name: "Sameeksha",
      role: "Jt. Treasurer",
      phone: "+91 7206567950",
      img: "/council/sameeksha.jpg",
    },
    {
      id: 7,
      name: "Yatharth Bisht",
      role: "Jt. Treasurer",
      phone: "+91 8882359577",
      img: "/council/yatharth.jpg",
    },
  ]

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  }

  const handleClose = () => {
    setSelectedMember(null);
  }

  return (
    <div className={'w-full sm:w-4/5 md:w-[70%] flex flex-col items-center justify-center -space-y-2 sm:pt-[3%] md:pt-[7%] lg:pt-[4%] box-border'}>
      <div className={'w-full px-10'}>
        <h1 className={'text-5xl w-full text-center sm:text-left'}>
          Our Team
        </h1>
      </div>
      
      <div className={'flex flex-col space-y-5 md:space-y-3'}>
        {/* First Row - 2 members */}
        <div className={styles.row}>
          {teamMembers.slice(0, 2).map(member => (
            <div 
              key={member.id} 
              className={`${styles.memberCircle} ${selectedMember?.id === member.id ? styles.selected : ''}`}
              onClick={() => handleMemberClick(member)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={member.img}
                alt={member.name.toLowerCase()}
                fill
                sizes="(max-width: 480px) 90px,
                       (max-width: 576px) 100px,
                       (max-width: 768px) 110px,
                       (max-width: 992px) 120px,
                       (max-width: 1200px) 130px,
                       (max-width: 1400px) 140px,
                       150px"
                quality={90}
                priority={member.id <= 2}
                className={styles.memberImage}
              />
              <div className={styles.memberDetails}>
                <h3 className='font-jmh lowercase'>{member.name}</h3>
                <p className='font-jmh lowercase'>{member.role}</p>
                {/* <p className='font-jmh lowercase'>{member.phone}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 members */}
        <div className={cn(
          'flex items-center justify-center gap-x-16 sm:gap-x-28 flex-wrap',
          )}>
          {teamMembers.slice(2, 5).map(member => (
            <div 
              key={member.id} 
              className={`${styles.memberCircle} ${selectedMember?.id === member.id ? styles.selected : ''}`}
              onClick={() => handleMemberClick(member)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 480px) 90px,
                       (max-width: 576px) 100px,
                       (max-width: 768px) 110px,
                       (max-width: 992px) 120px,
                       (max-width: 1200px) 130px,
                       (max-width: 1400px) 140px,
                       150px"
                quality={90}
                priority={member.id <= 2}
                className={styles.memberImage}
              />
              <div className={styles.memberDetails}>
                <h3 className='font-jmh lowercase'>{member.name}</h3>
                <p className='font-jmh lowercase font-light'>{member.role}</p>
                {/* <p className='font-jmh lowercase'>{member.phone}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 2 members */}
        <div className={styles.row}>
          {teamMembers.slice(5, 7).map(member => (
            <div 
              key={member.id} 
              className={`${styles.memberCircle} ${selectedMember?.id === member.id ? styles.selected : ''}`}
              onClick={() => handleMemberClick(member)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 480px) 90px,
                       (max-width: 576px) 100px,
                       (max-width: 768px) 110px,
                       (max-width: 992px) 120px,
                       (max-width: 1200px) 130px,
                       (max-width: 1400px) 140px,
                       150px"
                quality={90}
                priority={member.id <= 2}
                className={styles.memberImage}
              />
              <div className={styles.memberDetails}>
                <h3 className='font-jmh lowercase'>{member.name}</h3>
                <p className='font-jmh lowercase'>{member.role}</p>
                {/* <p className='font-jmh lowercase'>{member.phone}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className={styles.cardOverlay} onClick={handleClose}>
          <div className={styles.expandedCard} onClick={e => e.stopPropagation()}>
            <div className={styles.closeButtonWrapper}>
              <button className={styles.closeButton} onClick={handleClose}>
                <Image 
                  src="/close.svg" 
                  alt="Close" 
                  width={16} 
                  height={16} 
                  className={styles.crossIcon}
                />
              </button>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  fill
                  sizes="(max-width: 992px) 150px,
                          200px"
                  quality={90}
                  priority
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.cardDetails}>
                <h2>{selectedMember.name}</h2>
                <p className={styles.role}>{selectedMember.role}</p>
                <p className={styles.contact}>({selectedMember.phone})</p>
                <div className={styles.socialLinks}>
                  <Link href={selectedMember.socialLinks?.linkedin || "https://linkedin.com"} target="_blank" className={styles.socialLink}>
                    {/* <Image 
                      src="linkedin.svg"
                      alt="LinkedIn" 
                      width={24} 
                      height={24} 
                      className={styles.socialIcon}
                    /> */}
                    <Linkedin size={24} className={styles.socialIcon} />
                  </Link>
                  <Link href={selectedMember.socialLinks?.instagram || "https://instagram.com"} target="_blank" className={styles.socialLink}>
                    {/* <Image 
                      src="/iconmonstr-instagram-11-240.png"
                      alt="Instagram" 
                      width={24} 
                      height={24} 
                      className={styles.socialIcon}
                    /> */}
                    <Instagram size={24} className={styles.socialIcon} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamPage