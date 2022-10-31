import { Card, Grid, Text, Button, Row,Input,Spacer, Container } from "@nextui-org/react";

export default function App() {
  return (
    <Container  css={{mw:"600px"}}  gap={5}>
        <Card>
          <Card.Header>
            <Text b>Add Property</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Input disabled underlined labelPlaceholder="ID" css={{mw:"400px"}} initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Block" css={{mw:"400px"}}   initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Type" css={{mw:"400px"}}  initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Status" css={{mw:"400px"}}  initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Description" css={{mw:"400px"}}  initialValue="" />
             <Spacer y={1.5} />

          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button size="sm">Agree</Button>
            </Row>
          </Card.Footer>
        </Card>
      
      </Container>
  );
}
