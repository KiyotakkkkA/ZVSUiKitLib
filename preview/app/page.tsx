"use client";

import Link from "next/link";
import { ArrowRightIcon, BoxIcon, CopyIcon } from "./ui/icons";
import { SiteHeader } from "./ui/site-header";

const features = [
    {
        number: "01",
        title: "Accessible by default",
        text: "Thoughtful focus states, keyboard behavior, and semantic foundations are built into every primitive.",
    },
    {
        number: "02",
        title: "Designed to compose",
        text: "Predictable APIs and compound patterns let small pieces grow into confident product interfaces.",
    },
    {
        number: "03",
        title: "Built for real teams",
        text: "Typed exports, lean ESM output, and direct styling hooks keep delivery fast from prototype to production.",
    },
];

export default function Home() {
    return (
        <div className="landing-shell">
            <SiteHeader />

            <main>
                <section className="hero">
                    <div className="hero-grid" aria-hidden="true" />
                    <div
                        className="hero-orbit hero-orbit-one"
                        aria-hidden="true"
                    />
                    <div
                        className="hero-orbit hero-orbit-two"
                        aria-hidden="true"
                    />

                    <div className="hero-copy">
                        <div className="eyebrow">
                            <span /> React 19 ready · TypeScript first
                        </div>
                        <h1>
                            Interfaces with
                            <span>less noise.</span>
                        </h1>
                        <p>
                            A precise React component library for teams who care
                            about craft, speed, and a design system that stays
                            out of the way.
                        </p>
                        <div className="hero-actions">
                            <Link
                                className="button button-primary"
                                href="/components/input-small"
                            >
                                Explore components <ArrowRightIcon />
                            </Link>
                            <a
                                className="button button-secondary"
                                href="https://github.com/KiyotakkkkA/ZVSUiKitLib"
                            >
                                View on GitHub
                            </a>
                        </div>
                        <div
                            className="install-command"
                            aria-label="Install command"
                        >
                            <span>$</span>
                            <code>npm i @kiyotakkkka/zvs-uikit-lib</code>
                            <CopyIcon />
                        </div>
                    </div>

                    <div
                        className="hero-showcase"
                        aria-label="Component preview composition"
                    >
                        <div className="showcase-window">
                            <div className="window-bar">
                                <div>
                                    <i />
                                    <i />
                                    <i />
                                </div>
                                <span>account-settings.tsx</span>
                                <span className="window-status">Live</span>
                            </div>
                            <div className="window-content">
                                <div className="avatar-row">
                                    <div className="avatar">AJ</div>
                                    <div>
                                        <strong>Profile details</strong>
                                        <span>Visible to your workspace</span>
                                    </div>
                                    <span className="verified">Verified</span>
                                </div>
                                <div className="fake-field">
                                    <label>Display name</label>
                                    <div>Alex Johnson</div>
                                </div>
                                <div className="fake-field">
                                    <label>Work email</label>
                                    <div>hello@zvs-ui.dev</div>
                                </div>
                                <div className="preference-row">
                                    <div>
                                        <strong>Product updates</strong>
                                        <span>
                                            Receive new component announcements.
                                        </span>
                                    </div>
                                    <div className="fake-switch">
                                        <span />
                                    </div>
                                </div>
                                <button className="save-button">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="signal-strip"
                    aria-label="Library highlights"
                >
                    <span>48+ components</span>
                    <i />
                    <span>6.2 kB styles gzip</span>
                    <i />
                    <span>Tree-shakeable ESM</span>
                    <i />
                    <span>MIT licensed</span>
                </section>

                <section className="principles">
                    <div className="section-heading">
                        <span className="section-index">[01]</span>
                        <div>
                            <p>THE FOUNDATION</p>
                            <h2>Built to feel inevitable.</h2>
                        </div>
                        <p>
                            Strong defaults, subtle motion, and APIs that read
                            like the interface they produce.
                        </p>
                    </div>
                    <div className="feature-grid">
                        {features.map((feature) => (
                            <article
                                key={feature.number}
                                className="feature-card"
                            >
                                <span>{feature.number}</span>
                                <BoxIcon />
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
