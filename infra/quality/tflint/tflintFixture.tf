# Deliberately triggers TFLint's bundled "terraform_unused_declarations"
# rule: a variable is declared but never referenced anywhere in this
# configuration.
variable "unused_example" {
  type        = string
  description = "Declared for the fixture but intentionally never used."
  default     = "not referenced anywhere"
}

output "static_output" {
  value = "hello-from-tflint-fixture"
}
