"use client"

import React from 'react';

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Link,
} from '@react-pdf/renderer';

import { appData } from '@/app/data/AppData';


const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 11,
        lineHeight: 1.5,
        color: '#333',
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 12,
    },
    heading: {
        fontSize: 14,
        marginBottom: 4,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    subHeading: {
        fontSize: 12,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    text: {
        marginBottom: 2,
    },
    listItem: {
        marginLeft: 10,
    },
    link: {
        color: 'blue',
        textDecoration: 'underline',
    },
    footer: {
        marginTop: 20,
        fontSize: 8
    }
});

// Create Document Component
export const PdfResume = () => (
    <Document
        title={`${appData.aboutMe.name}'s Resume`}
        author={appData.aboutMe.name}
        subject={`${appData.aboutMe.name}'s Resume`}
        keywords={`${appData.aboutMe.name},${appData.aboutMe.occupation},${appData.skills.map((skill) => skill.tech.map((tech) => tech.name))}`}
        creator={appData.aboutMe.name}
        producer="React PDF"
        language="en"
    >
        <Page size="A4" style={styles.page}>
            {/* === Header === */}
            <View style={styles.section}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{appData.aboutMe.name}</Text>
                <Text>{appData.aboutMe.occupation}</Text>
                {appData.aboutMe.contact.email && <Text>Email: {appData.aboutMe.contact.email}</Text>}
                {appData.aboutMe.contact.phone && <Text>Phone: {appData.aboutMe.contact.phone}</Text>}
                {appData.aboutMe.contact.location && <Text>Location: {appData.aboutMe.contact.location}</Text>}
                {appData.aboutMe.contact.website && (
                    <Link style={styles.link} src={appData.aboutMe.contact.website}>
                        {appData.aboutMe.contact.website}
                    </Link>
                )}
            </View>

            {/* === About Me === */}
            <View style={styles.section}>
                <Text style={styles.heading}>About Me</Text>
                <Text>{appData.aboutMe.introText}</Text>
            </View>

            {/* === Experience === */}
            <View style={styles.section}>
                <Text style={styles.heading}>Experience</Text>
                {appData.experience.map((exp, i) => (
                    <View key={i} style={{ marginBottom: 6 }}>
                        <Text style={styles.subHeading}>
                            {exp.title} at {exp.company} ({exp.period.from} - {exp.period.to})
                        </Text>
                        {
                            exp.description.map((elem) => (
                                <Text key={elem}>• {elem}</Text>
                            ))
                        }
                        <Text style={{ marginTop: 5 }}>{exp.techStack.join(' | ')}</Text>
                    </View>
                ))}
            </View>

            {/* === Education === */}
            <View style={styles.section}>
                <Text style={styles.heading}>Education</Text>
                {appData.education.map((edu, i) => (
                    <View key={i} style={{ marginBottom: 6 }}>
                        <Text style={styles.subHeading}>
                            {edu.degree} - {edu.school} ({edu.period.from} - {edu.period.to})
                        </Text>
                        <Text>{edu.description}</Text>
                        {edu.academicAchievement && edu.academicAchievement?.length > 0 && edu.academicAchievement.map((item) => (
                            <Text key={item}>• {item}</Text>
                        ))}
                    </View>
                ))}
            </View>

            {/* === Skills === */}
            <View style={styles.section}>
                <Text style={styles.heading}>Skills</Text>
                {appData.skills.map((skill, i) => (
                    <View key={i}>
                        <Text style={styles.subHeading}>{skill.Category}</Text>
                        <Text>{skill.tech.map(t => t.name).join(', ')}</Text>
                    </View>
                ))}
            </View>

            {/* === Projects === */}
            <View style={styles.section}>
                <Text style={styles.heading}>Projects</Text>
                {appData.projects.map((proj, i) => (
                    <View key={i} style={{ marginBottom: 6 }}>
                        <Text style={styles.subHeading}>
                            {proj.title} ({proj.date})
                        </Text>
                        <Text>{proj.subTitle}</Text>
                        <Text>{proj.description}</Text>
                        {proj.techStack && proj.techStack?.length > 0 && (
                            <Text>{proj.techStack.join(' | ')}</Text>
                        )}
                        {proj.link && (
                            <Link style={styles.link} src={proj.link}>
                                {proj.link}
                            </Link>
                        )}
                        {proj.githubRepo && (
                            <Link style={styles.link} src={proj.githubRepo}>
                                GitHub
                            </Link>
                        )}
                    </View>
                ))}
            </View>

            {/* === Hobbies === */}
            <View style={styles.section}>
                <Text style={styles.heading}>Hobbies</Text>
                {appData.hobbies.map((hobby, i) => (
                    <View key={i}>
                        <Text style={styles.subHeading}>{hobby.name}</Text>
                        <Text>{hobby.description}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                <Text>
                    This resume has been dynamically generated. Sorry for the layout.
                </Text>
            </View>
        </Page>
    </Document>
);