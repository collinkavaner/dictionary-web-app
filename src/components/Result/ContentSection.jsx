import styled from 'styled-components'

const ContentSection = ({ result }) => {
    return (
        <NounContent>

            {result.meanings.map((meaning, index) => (
                <div key={index}>
                    <Title>
                        <h2>{meaning.partOfSpeech}</h2>
                        <hr />
                    </Title>
                    <Content>
                        <h3>Meaning</h3>
                        <UnorderedList>
                            {meaning.definitions.map((definition, index) => (
                                <ListItem key={index}>
                                    <p>{definition.definition}</p>
                                    {definition.example && <Example>“{definition.example}”</Example>}
                                </ListItem>
                            ))}
                        </UnorderedList>
                        { meaning.synonyms.length !== 0 &&
                        <SynonymWord>
                            <span>
                                Synonyms
                            </span>
                            <Synonyms>
                                { meaning.synonyms.map((synonym, index) => 
                                <span key={index}>{synonym}</span>)}
                            </Synonyms>
                        </SynonymWord> }
                    </Content>
                </div>
            ))}
        </NounContent>
    )
}

export default ContentSection

const NounContent = styled.div`
    width: 100%;
`

const Title = styled.div`
    margin: 50px 0;
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
        font-weight: 700;
        font-variation-settings: 'ital' 1;
        font-style: italic;
        word-break: keep-all;
    }

    hr {
        width: 100%;
        border: 1px solid #E9E9E9;
    }

    @media screen and (max-width: 442px) {
        margin: 32px 0;
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

    @media screen and (max-width: 442px) {
        padding-left: 1rem;
        margin-bottom: 32px;
    }
`

const ListItem = styled.li`
    margin-top: 1rem;
    padding-left: 1rem;

    &::marker {
        color: #A445ED;
    }
`

const SynonymWord = styled.h3`
    display: flex;

    span {
        word-break: keep-all;
    }

    @media screen and (max-width: 442px) {
        font-size: 1rem;
    }
`

const Synonyms = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 25px;
    flex-direction: row;
    margin-left: 25px;

    span {
        color: #A445ED;
        font-weight: 700;
    }
`

const Example = styled.p`
    margin-top: 12px;
    color: #757575;
`
