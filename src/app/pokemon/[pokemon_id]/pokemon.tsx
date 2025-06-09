import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Card, ListGroup, Badge } from 'react-bootstrap';

type Props = {
    pokemon: Pokemon;
};

export default function PokemonComponent(props: Props) {
    const { pokemon } = props;

    // Always show all badges for each evolution family member
    const getFamilyTags = (pokemon: Pokemon, evolution: string) => (
        <>
            <Badge bg={evolution === pokemon.devolution ? "danger" : "light"} className="shadow ms-2">
                Devolution
            </Badge>
            <Badge bg={evolution === pokemon.pokemonName ? "primary" : "light"} className="shadow ms-2">
                Current
            </Badge>
            <Badge bg={evolution === pokemon.evolution ? "success" : "light"} className="shadow ms-2">
                Evolution
            </Badge>
        </>
    );

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #fff 100%)" }}>
            <Card
                className="pokemon-3d-card p-4"
                style={{
                    maxWidth: 900,
                    borderRadius: 32,
                    boxShadow: "0 16px 48px 0 rgba(0,0,0,0.25), 0 2px 12px 0 rgba(0,0,0,0.10)",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(10px)",
                    border: "none",
                    position: "relative"
                }}
            >
                <Row className="justify-content-center align-items-center">
                    <Col md={5} className="d-flex flex-column align-items-center">
                        <div
                            style={{
                                background: "linear-gradient(145deg, #f0f6ff 60%, #c7d2fe 100%)",
                                borderRadius: 24,
                                boxShadow: "0 12px 40px 0 rgba(0,0,0,0.18)",
                                padding: 0,
                                marginBottom: 24,
                                marginTop: 24,
                                width: "100%",
                                maxWidth: 320,
                                aspectRatio: "1 / 1",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"
                            }}
                        >
                            <Image
                                src={pokemon.mainImage}
                                alt="pokemon_details"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 24,
                                    boxShadow: "0 8px 24px #60a5fa88"
                                }}
                                className="bg-white border border-4 border-primary"
                            />
                        </div>
                        <h2 className="fw-bold text-center mb-2" style={{
                            textShadow: "0 2px 8px #60a5fa33"
                        }}>{pokemon.pokemonName}</h2>
                        <div className="mb-3 text-center">
                            <Badge bg="secondary" className="shadow" style={{ fontSize: 18 }}>#{pokemon.pokemonNumber}</Badge>
                        </div>
                        <div className="mb-3 text-center">
                            {pokemon.pokemonType.map(type =>
                                <Badge key={type} bg="info" className="mx-1 shadow" style={{ fontSize: 16, padding: "0.5em 1em" }}>{type}</Badge>
                            )}
                        </div>
                    </Col>
                    <Col md={7}>
                        <Card className="mb-3 glass-card" style={{
                            borderRadius: 20,
                            background: "rgba(255,255,255,0.8)",
                            boxShadow: "0 2px 12px 0 rgba(96,165,250,0.10)",
                            border: "none"
                        }}>
                            <Card.Header className="fw-bold fs-5 bg-transparent border-0">Stats</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-transparent border-0 d-flex align-items-center">
                                    <span className="fw-semibold me-2">Speed:</span>
                                    <ProgressBar
                                        variant="info"
                                        now={pokemon.speed}
                                        style={{ height: 18, borderRadius: 8, boxShadow: "0 1px 4px #38bdf855", flex: 1 }}
                                        label={
                                            <span className="glow-number">{pokemon.speed}</span>
                                        }
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-transparent border-0 d-flex align-items-center">
                                    <span className="fw-semibold me-2">Health Points:</span>
                                    <ProgressBar
                                        variant="danger"
                                        now={pokemon.healthPoints}
                                        style={{ height: 18, borderRadius: 8, boxShadow: "0 1px 4px #ef444455", flex: 1 }}
                                        label={
                                            <span className="glow-number">{pokemon.healthPoints}</span>
                                        }
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-transparent border-0 d-flex align-items-center">
                                    <span className="fw-semibold me-2">Attack:</span>
                                    <ProgressBar
                                        variant="warning"
                                        now={pokemon.attack}
                                        style={{ height: 18, borderRadius: 8, boxShadow: "0 1px 4px #f59e4255", flex: 1 }}
                                        label={
                                            <span className="glow-number">{pokemon.attack}</span>
                                        }
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-transparent border-0 d-flex align-items-center">
                                    <span className="fw-semibold me-2">Defense:</span>
                                    <ProgressBar
                                        variant="success"
                                        now={pokemon.defense}
                                        style={{ height: 18, borderRadius: 8, boxShadow: "0 1px 4px #22c55e55", flex: 1 }}
                                        label={
                                            <span className="glow-number">{pokemon.defense}</span>
                                        }
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mb-3 glass-card" style={{
                            borderRadius: 20,
                            background: "rgba(255,255,255,0.8)",
                            boxShadow: "0 2px 12px 0 rgba(96,165,250,0.10)",
                            border: "none"
                        }}>
                            <Card.Header className="fw-bold fs-5 bg-transparent border-0">Evolution Family</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.evolutionFamily.map(evolution =>
                                    <ListGroup.Item
                                        key={pokemon.pokemonNumber + evolution}
                                        className="bg-transparent border-0 d-flex align-items-center"
                                        style={{
                                            fontWeight: evolution === pokemon.pokemonName ? "bold" : "normal",
                                            fontSize: 18
                                        }}
                                    >
                                        {evolution} {getFamilyTags(pokemon, evolution)}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <style jsx global>{`
                .pokemon-3d-card {
                    transition: box-shadow 0.3s, transform 0.3s;
                }
                .pokemon-3d-card:hover {
                    box-shadow: 0 24px 64px 0 rgba(59,130,246,0.25), 0 4px 24px 0 rgba(0,0,0,0.15);
                    transform: scale(1.02) perspective(800px) rotateY(6deg);
                }
                .glass-card {
                    backdrop-filter: blur(6px);
                }
                .glow-number {
                    color: #fff;
                    text-shadow:
                        0 0 8px #60a5fa,
                        0 0 16px #60a5fa,
                        0 0 24px #60a5fa,
                        0 0 32px #60a5fa;
                    font-weight: bold;
                }
            `}</style>
        </Container>
    );
}