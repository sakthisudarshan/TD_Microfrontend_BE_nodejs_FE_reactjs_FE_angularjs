# dependency-cruiser -- Angular 16

moduleA imports moduleB which imports moduleA back, enough to genuinely
trigger the no-circular rule.

Run: bash run_dependency_cruiser.sh
