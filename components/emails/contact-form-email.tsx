
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components"
import * as React from "react"

interface ContactFormEmailProps {
    name: string
    email: string
    btwNumber?: string
    message: string
}

export const ContactFormEmail = ({
    name,
    email,
    btwNumber,
    message,
}: ContactFormEmailProps) => (
    <Html>
        <Head />
        <Preview>Nieuw bericht van {name}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Nieuw bericht via contactformulier</Heading>
                <Text style={text}>
                    <strong>Naam:</strong> {name}
                </Text>
                <Text style={text}>
                    <strong>Email:</strong> {email}
                </Text>
                {btwNumber && (
                    <Text style={text}>
                        <strong>BTW Nummer:</strong> {btwNumber}
                    </Text>
                )}
                <Hr style={hr} />
                <Text style={text}>
                    <strong>Bericht:</strong>
                </Text>
                <Section style={messageBox}>
                    <Text style={text}>{message}</Text>
                </Section>
            </Container>
        </Body>
    </Html>
)

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
}

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    paddingBottom: "20px",
}

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "26px",
}

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
}

const messageBox = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "5px",
}

export default ContactFormEmail
