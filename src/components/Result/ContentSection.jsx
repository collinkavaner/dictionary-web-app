import styled from 'styled-components'

const NounSection = () => {
    return (
        <NounContent>
            <Title>
                <h2>noun</h2>
                <hr />
            </Title>
            <Content>
                <h3>Meaning</h3>
                <UnorderedList>
                    <ListItem>(etc.) A set of keys used to operate a typewriter, computer etc.</ListItem>
                    <ListItem>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</ListItem>
                    <ListItem>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</ListItem>
                </UnorderedList>
                <SynonymWord>Synonyms<span>electronic keyboard</span></SynonymWord>
            </Content>
            <Title>
                <h2>verb</h2>
                <hr />
            </Title>
            <Content>
                <h3>Meaning</h3>
                <UnorderedList>
                    <ListItem><p>To type on a computer keyboard.</p><Example>“Keyboarding is the part of this job I hate the most.”</Example></ListItem>
                </UnorderedList>
                {/* <SynonymWord>Synonyms<span>electronic keyboard</span></SynonymWord> */}
            </Content>
        </NounContent>
    )
}

export default NounSection

const NounContent = styled.div`
    width: 100%;
`

const Title = styled.div`
    margin: 50px 0;
    display: flex;
    align-items: center;
    gap: 32px;

    h2 {
        font-weight: 700;
        font-variation-settings: 'ital' 1;
        font-style: italic;
    }

    hr {
        width: 100%;
        border: 1px solid #E9E9E9;
    }
`

const Content = styled.div`

    h3 {
        color: #757575;
        font-weight: 400;
    }   
`

const UnorderedList = styled.ul`
    margin-top: 24px;
    margin-bottom: 50px;
    padding-left: 2rem;
`

const ListItem = styled.li`
    margin-top: 1rem;
    padding-left: 1rem;

    &::marker {
        color: #A445ED;
    }
`

const SynonymWord = styled.h3`
    span {
        margin-left: 25px;
        color: #A445ED;
        font-weight: 700;
    }
`

const Example = styled.p`
    margin-top: 12px;
    color: #757575;
`
