import React from "react";
import { Grid, Card, Text } from "@nextui-org/react";

function Admin(){
    interface prueba {
        text:string
    }

    const MockItem = ({ text }:prueba|any) => {
        return (
          <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                {text}
              </Text>
            </Card.Body>
          </Card>
        );
      };
      return (
            <Card>
                <div>
                  Administrador
                </div>
             </Card>
      );
}

export default Admin;