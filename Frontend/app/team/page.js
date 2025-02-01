'use client'
import React, { useState } from 'react'
import styles from './TeamPage.module.css'
import Image from 'next/image'
import Link from 'next/link'

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Member 1",
      role: "Role 1",
      phone: "Contact Info",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 2,
      name: "Member 2",
      role: "Role 2",
      phone: "Contact Info",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 3,
      name: "Member 3",
      role: "Role 3",
      phone: "Contact Info",
    },
    {
      id: 4,
      name: "Member 4",
      role: "Role 4",
      phone: "Contact Info",
    },
    {
      id: 5,
      name: "Member 5",
      role: "Role 5",
      phone: "Contact Info",
    },
    {
      id: 6,
      name: "Member 6",
      role: "Role 6",
      phone: "Contact Info",
    },
    {
      id: 7,
      name: "Member 7",
      role: "Role 7",
      phone: "Contact Info",
    },
  ]

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  }

  const handleClose = () => {
    setSelectedMember(null);
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Our Team</h1>
      </div>
      
      <div className={`${styles.teamLayout} ${selectedMember ? styles.expanded : ''}`}>
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
                src="/god.jpg"
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
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.phone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 members */}
        <div className={styles.row}>
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
                src="/god.jpg"
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
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.phone}</p>
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
                src="/god.jpg"
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
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.phone}</p>
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
                  src="/god.jpg"
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
                <p className={styles.contact}>{selectedMember.phone}</p>
                <div className={styles.socialLinks}>
                  <Link href={selectedMember.socialLinks?.linkedin || "https://linkedin.com"} target="_blank" className={styles.socialLink}>
                    <Image 
                      src="linkedin.svg"
                      alt="LinkedIn" 
                      width={24} 
                      height={24} 
                      className={styles.socialIcon}
                    />
                  </Link>
                  <Link href={selectedMember.socialLinks?.instagram || "https://instagram.com"} target="_blank" className={styles.socialLink}>
                    <Image 
                      src="/iconmonstr-instagram-11-240.png"
                      alt="Instagram" 
                      width={24} 
                      height={24} 
                      className={styles.socialIcon}
                    />
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