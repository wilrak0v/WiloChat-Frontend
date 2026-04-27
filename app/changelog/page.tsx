import { TypographyH1, TypographyP } from "@/components/typographie";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ChangelogPage() {
  return (
    <Card className="m-5">
      <CardHeader>
        <CardTitle>Changelog alpha v0.1</CardTitle>
        <CardDescription>The best news</CardDescription>
      </CardHeader>
      <CardContent>
        <TypographyP>
          Wilo Chat v0.1 initially focuses on the core functionalities of a
          private and secure messaging service. It introduces a new connection
          method and private messaging between two people. It is primarily a
          test and a proof of concept. <br />
          What is created for this version:
        </TypographyP>
        <ul>
          <li>- Login with public and private keys</li>
          <li>- Internet relay server</li>
          <li>- Web client</li>
          <li>- End to end encryption</li>
        </ul>
      </CardContent>
    </Card>
  );
}
