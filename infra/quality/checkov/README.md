# checkov -- Terraform 1.7

Hardcodes a fake Stripe-shaped secret key in a `docker_container` resource
so Checkov's secrets-detection scanner genuinely flags this fixture.

Run: bash run_checkov.sh
