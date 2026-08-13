# shellcheck -- bash 5.2

Unquoted variable expansions, a legacy backtick command substitution, an
unadorned glob, and a POSIX-sh `==` comparison, enough to genuinely trigger
multiple ShellCheck rules (SC2006, SC2035, SC2086, SC3014).

Run: bash run_shellcheck.sh
