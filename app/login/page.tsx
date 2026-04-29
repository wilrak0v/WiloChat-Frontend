"use client";

import { BackgroundPattern } from "@/components/background-pattern";
import { TypographyP } from "@/components/typographie";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <Card className="px-5 w-full max-w-sm backdrop-blur-md">
          <Tabs defaultValue="login">
            <TabsList className="w-full">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="create">Create a new key</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card className="mb-5 mt-2">
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Enter the private key. It NEVER quits your device. No public
                    key is required.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Field>
                    <FieldLabel>Username</FieldLabel>
                    <Input id="username" placeholder="wilrakov"></Input>
                    <FieldDescription>
                      Do not use your real name
                    </FieldDescription>
                    <FieldLabel>Private Key</FieldLabel>
                    <Input
                      id="priv-key"
                      type={showPassword ? "text" : "password"}
                      placeholder="d4247358053d2653c766274dc94db..."
                    ></Input>
                    <div className="flex gap-2 item-center">
                      <Checkbox
                        checked={showPassword}
                        onCheckedChange={(checked) =>
                          setShowPassword(!!checked)
                        }
                      ></Checkbox>
                      <Label>Show Key</Label>
                    </div>
                  </Field>
                  <div className="flex gap-2 w-full justify-between"></div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button variant="outline" disabled className="w-full">
                    Automatic login
                  </Button>
                  <Button className="w-full">Login</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="create">
              <Card className="mb-5 mt-2">
                <CardHeader>
                  <CardTitle>Generate a key</CardTitle>
                  <CardDescription>
                    Your private key is used to access your account. It is
                    generated locally and never leaves your device. Make sure to
                    save it securely, as it cannot be recovered if lost.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-col gap-2">
                  <ButtonGroup className="w-full">
                    <Input readOnly />
                    <Button variant="outline">Copy</Button>
                  </ButtonGroup>
                  <Button className="w-full">Generate</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
