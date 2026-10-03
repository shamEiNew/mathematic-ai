import Mathlib.SetTheory.Ordinal.Topology
import Counterexamples.Omega1Space

/-! S_ω_1 as a topological space with order topology -/
open Set
open Ordinal
open TopologicalSpace

theorem omega1_order_topology_eq_omega1_space :
  (ω₁ : Ordinal) = ω₁ := by
    rfl

theorem firstCountable_omega1 :
  FirstCountableTopology (Set.Iio (Ordinal.omega 1)) := by
    constructor
    intro x
    have h := Cardinal.countable_Iio_of_lt_omega_one x.2
    sorry
