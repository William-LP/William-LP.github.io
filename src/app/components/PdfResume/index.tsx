"use client"

import React from 'react';

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Link,
    Font,
    Svg,
    Path,
    Circle,
    Image,
} from '@react-pdf/renderer';

import { appData } from '@/app/data/AppData';

// In the browser assets are served from the site root, in Node (preview scripts) from ./public
const assetBase = typeof window === 'undefined' ? `${process.cwd()}/public` : '';

Font.register({
    family: 'Lato',
    fonts: [
        { src: `${assetBase}/fonts/Lato-Regular.ttf` },
        { src: `${assetBase}/fonts/Lato-Italic.ttf`, fontStyle: 'italic' },
        { src: `${assetBase}/fonts/Lato-Bold.ttf`, fontWeight: 700 },
        { src: `${assetBase}/fonts/Lato-Black.ttf`, fontWeight: 900 },
    ],
});

// Keep words whole — hyphenation looks broken in narrow columns
Font.registerHyphenationCallback((word) => [word]);

const C = {
    sidebarBg: '#16191E',
    sidebarRule: '#3A414A',
    sidebarAccent: '#FFFFFF',
    sidebarHeading: '#E8EBEE',
    sidebarText: '#C9CFD6',
    sidebarMuted: '#979FA8',
    chipBg: '#282E36',
    chipText: '#CDD3DA',
    accent: '#111827',
    ink: '#0F172A',
    body: '#374151',
    muted: '#64748B',
    faint: '#94A3B8',
    rule: '#E2E8F0',
    chipLightBg: '#F1F5F9',
};

const SIDEBAR_WIDTH = 182;

const styles = StyleSheet.create({
    // NB: lineHeight must NOT be set on the page itself — any inherited lineHeight
    // makes the render-prop page-number Text disappear (react-pdf bug).
    page: {
        fontFamily: 'Lato',
        fontSize: 9.5,
        color: C.body,
        paddingTop: 30,
        paddingBottom: 34,
    },
    sidebarBg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: SIDEBAR_WIDTH,
        backgroundColor: C.sidebarBg,
    },
    row: {
        flexDirection: 'row',
    },

    /* ===== Sidebar ===== */
    sidebar: {
        width: SIDEBAR_WIDTH,
        paddingHorizontal: 20,
        color: C.sidebarText,
        fontSize: 8.5,
        lineHeight: 1.5,
    },
    avatarWrap: {
        alignItems: 'center',
        marginBottom: 22,
    },
    avatarRing: {
        width: 74,
        height: 74,
        borderRadius: 37,
        borderWidth: 1.5,
        borderColor: C.sidebarAccent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 66,
        height: 66,
        borderRadius: 33,
    },
    sideSection: {
        marginBottom: 18,
    },
    sideTitle: {
        color: C.sidebarHeading,
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: 1.8,
        textTransform: 'uppercase',
        borderBottomWidth: 0.8,
        borderBottomColor: C.sidebarRule,
        paddingBottom: 4,
        marginBottom: 9,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    contactIcon: {
        width: 14,
        paddingTop: 1.5,
    },
    contactText: {
        flex: 1,
        color: C.sidebarText,
        fontSize: 8,
        textDecoration: 'none',
    },
    skillCategory: {
        color: C.sidebarMuted,
        fontSize: 7.5,
        fontWeight: 700,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    chipWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    chip: {
        lineHeight: 1.2,
        backgroundColor: C.chipBg,
        color: C.chipText,
        fontSize: 7.5,
        borderRadius: 3,
        paddingVertical: 2,
        paddingHorizontal: 5,
        marginRight: 4,
        marginBottom: 4,
    },
    sideEntry: {
        marginBottom: 10,
    },
    sidePeriod: {
        color: C.sidebarAccent,
        fontSize: 7.5,
        fontWeight: 700,
        letterSpacing: 0.5,
        marginBottom: 1,
    },
    sideEntryTitle: {
        color: '#FFFFFF',
        fontSize: 8.8,
        fontWeight: 700,
        textDecoration: 'none',
    },
    sideEntrySub: {
        color: C.sidebarMuted,
        fontSize: 8,
    },
    sideAchievement: {
        color: C.sidebarAccent,
        fontSize: 7.8,
        marginTop: 1,
    },
    sideBody: {
        color: C.sidebarMuted,
        fontSize: 7.8,
        lineHeight: 1.45,
    },

    /* ===== Main column ===== */
    main: {
        flex: 1,
        paddingLeft: 26,
        paddingRight: 30,
        lineHeight: 1.5,
    },
    name: {
        fontSize: 25,
        fontWeight: 900,
        color: C.ink,
        letterSpacing: 0.2,
        lineHeight: 1.15,
    },
    occupation: {
        color: C.accent,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.3,
        marginTop: 3,
        marginBottom: 16,
    },
    section: {
        marginBottom: 14,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 9,
    },
    sectionMark: {
        width: 13,
        height: 3,
        backgroundColor: C.accent,
        borderRadius: 1.5,
        marginRight: 7,
    },
    sectionTitle: {
        color: C.ink,
        fontSize: 10.5,
        fontWeight: 900,
        letterSpacing: 1.8,
        textTransform: 'uppercase',
        marginRight: 9,
    },
    sectionRule: {
        flex: 1,
        height: 0.8,
        backgroundColor: C.rule,
    },
    profileText: {
        fontSize: 9.5,
        lineHeight: 1.6,
        color: C.body,
    },
    entry: {
        marginBottom: 11,
    },
    entryHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 3,
    },
    entryHeading: {
        flex: 1,
        paddingRight: 8,
    },
    entryTitle: {
        fontSize: 10.5,
        fontWeight: 700,
        color: C.ink,
        lineHeight: 1.3,
    },
    entryCompany: {
        fontSize: 9,
        fontWeight: 700,
        color: C.accent,
        lineHeight: 1.35,
    },
    periodChip: {
        lineHeight: 1.2,
        backgroundColor: C.chipLightBg,
        color: C.muted,
        fontSize: 7.5,
        fontWeight: 700,
        borderRadius: 3,
        paddingVertical: 2,
        paddingHorizontal: 6,
        marginTop: 1,
    },
    bullet: {
        flexDirection: 'row',
        marginBottom: 1.5,
    },
    bulletDot: {
        width: 10,
        color: C.accent,
        fontWeight: 700,
        fontSize: 9,
        lineHeight: 1.5,
    },
    bulletText: {
        flex: 1,
        fontSize: 9,
        lineHeight: 1.5,
        color: C.body,
    },
    techLine: {
        lineHeight: 1.4,
        marginTop: 3.5,
        fontSize: 7.5,
        color: C.faint,
        letterSpacing: 0.4,
    },
    projectDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        color: C.body,
    },
    projectLink: {
        lineHeight: 1.3,
        fontSize: 8,
        fontWeight: 700,
        color: C.accent,
        textDecoration: 'none',
        marginTop: 1.5,
    },
    pageNumber: {
        position: 'absolute',
        bottom: 14,
        right: 30,
        fontSize: 7.5,
        color: C.faint,
    },
});

/* ===== Tiny stroke icons (lucide outlines) ===== */

type IconProps = { children: React.ReactNode };

const SideIcon = ({ children }: IconProps) => (
    <Svg width={8} height={8} viewBox="0 0 24 24">
        {children}
    </Svg>
);

const stroke = {
    stroke: C.sidebarAccent,
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

const MailIcon = () => (
    <SideIcon>
        <Path {...stroke} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <Path {...stroke} d="m22 6-10 7L2 6" />
    </SideIcon>
);

const PhoneIcon = () => (
    <SideIcon>
        <Path {...stroke} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </SideIcon>
);

const PinIcon = () => (
    <SideIcon>
        <Path {...stroke} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <Circle {...stroke} cx={12} cy={10} r={3} />
    </SideIcon>
);

const GlobeIcon = () => (
    <SideIcon>
        <Circle {...stroke} cx={12} cy={12} r={10} />
        <Path {...stroke} d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <Path {...stroke} d="M2 12h20" />
    </SideIcon>
);

const LinkedinIcon = () => (
    <SideIcon>
        <Path {...stroke} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4" />
        <Path {...stroke} d="M2 9h4v12H2z" />
        <Circle {...stroke} cx={4} cy={4} r={2} />
    </SideIcon>
);

const GithubIcon = () => (
    <SideIcon>
        <Path {...stroke} d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <Path {...stroke} d="M9 18c-4.51 2-5-2-7-2" />
    </SideIcon>
);

/* ===== Building blocks ===== */

const prettyUrl = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const ContactRow = ({ icon, href, children }: { icon: React.ReactNode, href?: string, children: React.ReactNode }) => (
    <View style={styles.contactRow}>
        <View style={styles.contactIcon}>{icon}</View>
        {href
            ? <Link style={styles.contactText} src={href}>{children}</Link>
            : <Text style={styles.contactText}>{children}</Text>}
    </View>
);

// The heading travels with the first entry (wrap={false}) so a section title
// can never be left orphaned at the bottom of a page.
const SideSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const items = React.Children.toArray(children);
    return (
        <View style={styles.sideSection}>
            <View wrap={false}>
                <Text style={styles.sideTitle}>{title}</Text>
                {items[0]}
            </View>
            {items.slice(1)}
        </View>
    );
};

const MainSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const items = React.Children.toArray(children);
    return (
        <View style={styles.section}>
            <View wrap={false}>
                <View style={styles.sectionHeader}>
                    <View style={styles.sectionMark} />
                    <Text style={styles.sectionTitle}>{title}</Text>
                    <View style={styles.sectionRule} />
                </View>
                {items[0]}
            </View>
            {items.slice(1)}
        </View>
    );
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.bullet}>
        <Text style={styles.bulletDot}>›</Text>
        <Text style={styles.bulletText}>{children}</Text>
    </View>
);

const socialIcon = (href: string) => {
    if (href.includes('linkedin')) return <LinkedinIcon />;
    if (href.includes('github')) return <GithubIcon />;
    return <GlobeIcon />;
};

// Create Document Component
export const PdfResume = () => (
    <Document
        title={`${appData.aboutMe.name}'s Resume`}
        author={appData.aboutMe.name}
        subject={`${appData.aboutMe.name}'s Resume`}
        keywords={[
            appData.aboutMe.name,
            appData.aboutMe.occupation,
            ...appData.skills.flatMap((skill) => skill.tech.map((tech) => tech.name)),
        ].join(', ')}
        creator={appData.aboutMe.name}
        producer="React PDF"
        language="en"
    >
        <Page size="A4" style={styles.page}>
            {/* Dark band behind the sidebar, repeated on every page */}
            <View style={styles.sidebarBg} fixed />

            <Text
                fixed
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) => `${appData.aboutMe.name}  ·  ${pageNumber} / ${totalPages}`}
            />

            <View style={styles.row}>
                {/* ===== Sidebar ===== */}
                <View style={styles.sidebar}>
                    <View style={styles.avatarWrap}>
                        <View style={styles.avatarRing}>
                            <Image src={`${assetBase}/profile_picture.jpg`} style={styles.avatar} />
                        </View>
                    </View>

                    <SideSection title="Contact">
                        {appData.aboutMe.contact.email && (
                            <ContactRow icon={<MailIcon />} href={`mailto:${appData.aboutMe.contact.email}`}>
                                {appData.aboutMe.contact.email}
                            </ContactRow>
                        )}
                        {appData.aboutMe.contact.phone && (
                            <ContactRow icon={<PhoneIcon />}>{appData.aboutMe.contact.phone}</ContactRow>
                        )}
                        {appData.aboutMe.contact.location && (
                            <ContactRow icon={<PinIcon />}>{appData.aboutMe.contact.location}</ContactRow>
                        )}
                        {appData.aboutMe.contact.website && (
                            <ContactRow icon={<GlobeIcon />} href={appData.aboutMe.contact.website}>
                                {prettyUrl(appData.aboutMe.contact.website)}
                            </ContactRow>
                        )}
                        {appData.aboutMe.socials.map((social) => (
                            <ContactRow key={social.href} icon={socialIcon(social.href)} href={social.href}>
                                {prettyUrl(social.href)}
                            </ContactRow>
                        ))}
                    </SideSection>

                    <SideSection title="Skills">
                        {appData.skills.map((skill) => (
                            <View key={skill.Category}>
                                <Text style={styles.skillCategory}>{skill.Category}</Text>
                                <View style={styles.chipWrap}>
                                    {skill.tech.map((tech) => (
                                        <Text key={tech.name} style={styles.chip}>{tech.name}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </SideSection>

                    <SideSection title="Education">
                        {appData.education.map((edu, i) => (
                            <View key={i} style={styles.sideEntry} wrap={false}>
                                <Text style={styles.sidePeriod}>{edu.period.from} – {edu.period.to} · {edu.location}</Text>
                                <Text style={styles.sideEntryTitle}>{edu.degree}</Text>
                                <Text style={styles.sideEntrySub}>{edu.school}</Text>
                                <Text style={styles.sideBody}>{edu.description}</Text>
                                {edu.academicAchievement?.map((item) => (
                                    <Text key={item} style={styles.sideAchievement}>★ {item}</Text>
                                ))}
                            </View>
                        ))}
                    </SideSection>

                    <SideSection title="Certifications">
                        {appData.certifications.map((cert, i) => (
                            <View key={i} style={styles.sideEntry} wrap={false}>
                                {cert.link
                                    ? <Link style={styles.sideEntryTitle} src={cert.link}>{cert.title}</Link>
                                    : <Text style={styles.sideEntryTitle}>{cert.title}</Text>}
                                <Text style={styles.sideEntrySub}>{cert.issuer}</Text>
                            </View>
                        ))}
                    </SideSection>

                    <SideSection title="Hobbies">
                        {appData.hobbies.map((hobby) => (
                            <View key={hobby.name} style={styles.sideEntry} wrap={false}>
                                <Text style={styles.sideEntryTitle}>{hobby.name}</Text>
                                <Text style={styles.sideBody}>{hobby.description}</Text>
                            </View>
                        ))}
                    </SideSection>
                </View>

                {/* ===== Main column ===== */}
                <View style={styles.main}>
                    <Text style={styles.name}>{appData.aboutMe.name}</Text>
                    <Text style={styles.occupation}>{appData.aboutMe.occupation}</Text>

                    <MainSection title="Profile">
                        <Text style={styles.profileText}>{appData.aboutMe.introText}</Text>
                    </MainSection>

                    <MainSection title="Experience">
                        {appData.experience.map((exp, i) => (
                            <View key={i} style={styles.entry} wrap={false}>
                                <View style={styles.entryHeader}>
                                    <View style={styles.entryHeading}>
                                        <Text style={styles.entryTitle}>{exp.title}</Text>
                                        <Text style={styles.entryCompany}>{exp.company}</Text>
                                    </View>
                                    <Text style={styles.periodChip}>{exp.period.from} – {exp.period.to}</Text>
                                </View>
                                {exp.description.map((elem) => (
                                    <Bullet key={elem}>{elem}</Bullet>
                                ))}
                                <Text style={styles.techLine}>{exp.techStack.join(', ')}</Text>
                            </View>
                        ))}
                    </MainSection>

                    <MainSection title="Projects">
                        {appData.projects.map((proj, i) => (
                            <View key={i} style={styles.entry} wrap={false}>
                                <View style={styles.entryHeader}>
                                    <View style={styles.entryHeading}>
                                        <Text style={styles.entryTitle}>{proj.title}</Text>
                                        {proj.subTitle && <Text style={styles.entryCompany}>{proj.subTitle}</Text>}
                                    </View>
                                    <Text style={styles.periodChip}>{proj.date}</Text>
                                </View>
                                <Text style={styles.projectDescription}>{proj.description}</Text>
                                {proj.link && (
                                    <Link style={styles.projectLink} src={proj.link}>{prettyUrl(proj.link)}</Link>
                                )}
                                {proj.githubRepo && (
                                    <Link style={styles.projectLink} src={proj.githubRepo}>{prettyUrl(proj.githubRepo)}</Link>
                                )}
                                {proj.techStack && proj.techStack.length > 0 && (
                                    <Text style={styles.techLine}>{proj.techStack.join(', ')}</Text>
                                )}
                            </View>
                        ))}
                    </MainSection>
                </View>
            </View>
        </Page>
    </Document>
);
