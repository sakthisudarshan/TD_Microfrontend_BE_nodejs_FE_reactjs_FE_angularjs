resource "docker_container" "checkov_fixture" {
  name  = "checkov-fixture"
  image = "example:latest"

  # Intentionally hardcoded fake credential (Stripe live-secret-key shape)
  # so Checkov's secrets-detection scanner genuinely flags this fixture.
  env = [
    "STRIPE_SECRET_KEY=sk_test_51H8x2eZvKYlo2CtZQ9F3exampleFAKEKEY0000"
  ]
}
