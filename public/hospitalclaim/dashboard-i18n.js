/* Shared Indonesian/English interface copy for both MAXY AI dashboards. */
(function(){
'use strict';
var translations={
  "Lewati ke konten utama": "Skip to main content",
  "Bukti untuk keputusan.": "Evidence for hospital decisions.",
  "Pelajari cara kerja": "Review how it works",
  "Dari teks menjadi": "From text to",
  "keputusan.": "decisions.",
  "Data terhubung.": "Connected data.",
  "Konteks utuh.": "Complete context.",
  "Claim Intelligence yang": "Claim Intelligence that is",
  "dapat diaudit.": "auditable.",
  "Satu penalaran.": "One line of reasoning.",
  "Tiga perspektif.": "Three perspectives.",
  "Dari layanan klinis": "From clinical care",
  "hingga revenue.": "to revenue.",
  "Sistem terintegrasi, bukan kumpulan modul terpisah. Setiap modul menggunakan data pasien dan peristiwa layanan yang sama untuk mengurangi entri ulang, pekerjaan reaktif, serta keputusan tanpa konteks.": "An integrated system, not a collection of separate modules. Every module uses the same patient data and service events to reduce duplicate entry, reactive work, and decisions made without context.",
  "Temuan diidentifikasi sebelum klaim diajukan.": "Findings are identified before claims are submitted.",
  "Kandidat kode dengan alasan klinis.": "Coding candidates with clinical rationale.",
  "Berkas yang dikembalikan memiliki alur penyelesaian.": "Returned claims have a resolution workflow.",
  "06 / Evidence dan verifikasi": "06 / Evidence and verification",
  "Setiap rekomendasi": "Every recommendation",
  "SIMRS terintegrasi.": "Integrated hospital information system.",
  "Konteks bagi intelligence.": "Context for intelligence.",
  "Seluruh modul dapat dioperasikan.": "Every module can be operated.",
  "Telusuri semua modul ↗": "Explore all modules ↗",
  "Telusuri 21 modul": "Explore 21 modules",
  "Tinjau dokumen OCR": "Review OCR document",
  "Claim Intelligence dalam": "Claim Intelligence within",
  "alur kerja rumah sakit.": "the hospital workflow.",
  "memindai": "scanning",
  "OCR + struktur dokumen": "OCR + document structure",
  "KONTEKS KLAIM": "CLAIM CONTEXT",
  "1 kunjungan · 4 bukti": "1 encounter · 4 evidence items",
  "Lapisan penalaran klinis": "Clinical reasoning layer",
  "sumber tertaut · dapat ditelusuri": "source linked · traceable",
  "perlu ditinjau": "review needed",
  "risiko klaim": "claim risk",
  "rendah": "low",
  "tinggi": "high",
  "tinjau": "review",
  "sesuai": "valid",
  "Sinyal risiko + koding": "Risk + coding signals",
  "2 temuan · 4 bukti": "2 findings · 4 evidence",
  "Bukti": "Evidence",
  "Menunggu peninjauan manusia": "Awaiting human review",
  "Jejak audit": "Audit trail",
  "Grafik bukti dibuat": "Evidence graph created",
  "peninjauan koder": "coder review",
  "Keputusan oleh manusia": "Human decision-making",
  "Perjalanan pasien": "Patient journey",
  "Konteks": "Context",
  "Data rumah sakit tidak kurang. Yang sering hilang adalah": "Hospitals do not lack data. What is often missing is",
  "hubungannya.": "the connection between them.",
  "Identitas, order, hasil penunjang, obat, dokumentasi, dan klaim sering tersebar pada layar yang berbeda. Maxy AI Hospital Intelligence menyatukan perjalanan pasien sehingga setiap tim membaca konteks yang sama, dari registrasi hingga penyelesaian pembayaran.": "Patient identity, orders, diagnostic results, medications, documentation, and claims are often spread across different screens. Maxy AI Hospital Intelligence unifies the patient journey so every team reads the same context, from registration through payment settlement.",
  "Pasien berpindah, data terpisah.": "Patients move; data remains fragmented.",
  "Identitas dan kunjungan dapat terpecah antara pendaftaran, poliklinik, IGD, dan rawat inap.": "Identity and encounters can be split across registration, outpatient clinics, the emergency department, and inpatient care.",
  "Penunjang berjalan sendiri.": "Diagnostics operate in isolation.",
  "Order laboratorium, radiologi, farmasi, dan gizi tidak selalu terlihat dalam satu linimasa klinis.": "Laboratory, radiology, pharmacy, and nutrition orders are not always visible on one clinical timeline.",
  "Risiko revenue baru terlihat di akhir.": "Revenue risk becomes visible too late.",
  "Dokumentasi dan klaim sering ditinjau setelah layanan selesai, ketika perbaikan menjadi lebih sulit.": "Documentation and claims are often reviewed after care is complete, when remediation is more difficult.",
  "Risiko sedang": "Moderate risk",
  "Ilustrasi kasus / I50.9": "Case illustration / I50.9",
  "Satu temuan dokumentasi dapat mengubah keputusan klaim.": "A single documentation finding can change a claim decision.",
  "Diagnosis utama": "Primary diagnosis",
  "Lama rawat": "Length of stay",
  "9 hari · Jantung": "9 days · Cardiology",
  "Na 126 mmol/L · NaCl 3% diberikan": "Na 126 mmol/L · 3% NaCl administered",
  "I50.9 · Gagal jantung": "I50.9 · Heart failure",
  "Status kode": "Coding status",
  "Diagnosis sekunder belum dikode": "Secondary diagnosis not yet coded",
  "Bukti klinis ditemukan": "Clinical evidence found",
  "Hasil elektrolit dan instruksi terapi saling mendukung. Terdapat alasan klinis untuk meninjau hiponatremia sebelum klaim diajukan.": "Electrolyte results and treatment instructions support each other. There is a clinical rationale to review hyponatremia before the claim is submitted.",
  "Kandidat diagnosis sekunder": "Secondary diagnosis candidate",
  "Perlu konfirmasi koder dan DPJP": "Requires coder and attending physician confirmation",
  "terhubung ke bukti": "linked to evidence",
  "Bukti masuk · peninjauan koding · keputusan manusia": "Evidence intake · coding review · human decision",
  "1 celah dapat dicegah lebih awal": "1 gap can be prevented earlier",
  "05 / Operasional terintegrasi": "05 / Integrated operations",
  "Dari layar klinis sampai keputusan": "From clinical screens to",
  "Bukan sekadar kumpulan menu. Setiap modul menggunakan data pasien dan peristiwa layanan yang sama untuk mengurangi entri ulang, pekerjaan reaktif, serta keputusan tanpa konteks.": "More than a collection of menus. Every module uses the same patient data and service events to reduce duplicate entry, reactive work, and decisions made without context.",
  "Temuan muncul saat masih dapat diperbaiki.": "Findings surface while they can still be resolved.",
  "Checklist SEP, resume, penunjang, operasi, kode, dan tagihan ditinjau dalam satu skor risiko yang dapat ditelusuri.": "SEP checklists, medical summaries, diagnostics, procedures, codes, and charges are reviewed within one traceable risk score.",
  "SEP dan eligibilitas": "SEP and eligibility",
  "valid": "valid",
  "Bukti penunjang": "Supporting evidence",
  "terhubung": "linked",
  "Resume belum ditandatangani": "Summary not yet signed",
  "Kode sekunder belum didukung": "Secondary code not yet supported",
  "Kutipan dapat ditelusuri ke dokumen sumber, halaman, dan konteks klinis yang mendukung rekomendasi koding.": "Quotes can be traced to source documents, pages, and the clinical context supporting a coding recommendation.",
  "Setiap rekomendasi memiliki alamat.": "Every recommendation has a source.",
  "3 sumber": "3 sources",
  "4 sumber": "4 sources",
  "hlm. 7": "p. 7",
  "Peluang kode, bukan tebakan.": "Coding opportunities, not guesswork.",
  "Kandidat ICD-10 dan ICD-9-CM disertai alasan klinis serta dampaknya terhadap severity.": "ICD-10 and ICD-9-CM candidates include clinical rationale and their impact on severity.",
  "Evidence terkait": "Linked evidence",
  "2 kandidat": "2 candidates",
  "Dampak kelompok": "Grouping impact",
  "Potensi tarif": "Potential tariff",
  "Ilustrasi iDRG": "iDRG illustration",
  "terukur": "measurable",
  "Berkas yang dikembalikan memiliki jalur penyelesaian.": "Returned claims have a resolution path.",
  "Temuan dapat dikelompokkan, PIC ditetapkan, dan draf jawaban disusun dari evidence yang tersedia.": "Findings can be grouped, owners assigned, and response drafts prepared from available evidence.",
  "Perlu ditinjau · 3": "Needs review · 3",
  "Siap dijawab · 2": "Ready to respond · 2",
  "I50.9 · 9 hari": "I50.9 · 9 days",
  "O82 · 4 hari": "O82 · 4 days",
  "I63.9 · draf siap": "I63.9 · draft ready",
  "A09 · cek berkas": "A09 · check documents",
  "Satu identitas pasien di setiap layar.": "One patient identity across every screen.",
  "Layanan, penunjang, billing, dan klaim membaca kunjungan yang sama. Integrasi dirancang melalui API, FHIR, dan webhook, dengan persetujuan manusia sebelum pengiriman.": "Clinical services, diagnostics, billing, and claims read the same encounter. Integration is designed through APIs, FHIR, and webhooks, with human approval before submission.",
  "Cakupan workspace": "Workspace coverage",
  "21 modul. Satu sumber data pasien.": "21 modules. One patient data source.",
  "Mulai dari pendaftaran hingga payroll. Setiap modul berbagi identitas pasien, kunjungan, order, dan jejak audit yang sama agar perpindahan antar tim tidak memutus konteks.": "From registration to payroll. Every module shares the same patient identity, encounter, orders, and audit trail so handoffs between teams do not break context.",
  "5 modul klinis": "5 clinical modules",
  "Pendaftaran & master pasien": "Registration & patient master",
  "Rawat jalan & antrean": "Outpatient & queue",
  "Rawat inap & bed board": "Inpatient & bed board",
  "IGD & triage": "Emergency & triage",
  "Kamar operasi": "Operating rooms",
  "5 modul layanan": "5 service modules",
  "Farmasi & dispensing": "Pharmacy & dispensing",
  "Radiologi & imaging": "Radiology & imaging",
  "Gizi & diet order": "Nutrition & diet orders",
  "5 modul revenue": "5 revenue modules",
  "Billing & kasir": "Billing & cashier",
  "Klaim BPJS & pending": "BPJS claims & pending",
  "Asuransi & TPA": "Insurance & TPA",
  "Keuangan & AR": "Finance & AR",
  "6 modul kontrol": "6 control modules",
  "Inventori & logistik": "Inventory & logistics",
  "SDM & payroll": "HR & payroll",
  "Audit & akses": "Audit & access",
  "Analitik kinerja": "Performance analytics",
  "Overview operasional": "Operational overview",
  "Setiap modul dapat diinteraksi.": "Every module is interactive.",
  "Jelajahi semua modul ↗": "Explore all modules ↗",
  "Semua modul": "All modules",
  "04 / Tiga lapisan intelligence": "04 / Three intelligence layers",
  "06 / Evidence over assertion": "06 / Evidence over assertion",
  "07 / Dari dokumen ke keputusan": "07 / From documents to decisions",
  "08 / SIMRS": "08 / Hospital information system",
  "Mengapa": "Why",
  "Kapabilitas": "Capabilities",
  "Cara kerja": "How it works",
  "untuk setiap keputusan.": "for every hospital decision.",
  "Di dalam SIMRS": "Within the",
  ", dokumen klinis dibaca, konteks pasien dipahami, risiko klaim diidentifikasi, dan bukti keputusan disusun secara terverifikasi—sebelum berkas diajukan.": ", clinical documents are read, patient context is understood, claim risks are identified, and decision evidence is assembled in a verifiable manner—before a claim is submitted.",
  "Tinjau cara kerja": "Review how it works",
  "OCR dokumen klinis": "Clinical document OCR",
  "Konteks pasien": "Patient context",
  "OCR membaca teks.": "OCR reads text.",
  "memahami klaim.": "understands claims.",
  "Claim Intelligence bukan hanya ekstraksi dokumen.": "Claim Intelligence is more than document extraction.",
  "Lapisan ini menghubungkan isi rekam medis, hasil penunjang, kode diagnosis, dan ketentuan klaim dalam satu konteks pasien yang utuh.": "This layer connects the medical record, diagnostic results, diagnosis codes, and claim requirements into a complete patient context.",
  "Setiap sinyal risiko, kandidat kode, dan rekomendasi disertai sumber yang dapat ditinjau kembali oleh koder, verifikator, maupun tim revenue.": "Every risk signal, coding candidate, and recommendation includes sources that can be reviewed by coders, verifiers, and the revenue team.",
  "Baca konteks · identifikasi kesenjangan · tunjukkan bukti": "Read context · identify gaps · show evidence",
  "LAPISAN": "LAYERS",
  "Dokumen, klinis, dan revenue.": "Documents, clinical, and revenue.",
  "Satu rantai penalaran, bukan tiga alat yang terpisah.": "One chain of reasoning, not three separate tools.",
  "PASIEN": "PATIENT",
  "Konteks yang konsisten.": "Consistent context.",
  "Dokumen dan klaim merujuk pada kunjungan pasien yang sama.": "Documents and claims refer to the same patient encounter.",
  "Keputusan tetap berada pada manusia.": "Decisions remain with people.",
  "Setiap rekomendasi melewati peninjauan sebelum diterapkan.": "Every recommendation undergoes review before it is applied.",
  "Bukan sekadar chatbot.": "Not merely a chatbot.",
  "Claim Intelligence yang dapat diaudit.": "Auditable Claim Intelligence.",
  "Antarmuka ini memperlihatkan dasar setiap rekomendasi: dokumen yang dibaca, konteks yang dihubungkan, alasan risiko, dan pihak yang mengambil keputusan.": "This interface exposes the basis of every recommendation: the documents read, the context connected, the reason for risk, and the person making the decision.",
  "Baca secara terstruktur.": "Read with structure.",
  "OCR, klasifikasi dokumen, dan ekstraksi data klinis.": "OCR, document classification, and clinical data extraction.",
  "Pahami melalui konteks.": "Understand through context.",
  "Evidence graph yang menghubungkan diagnosis, hasil laboratorium, dan tindakan.": "An evidence graph connecting diagnoses, laboratory results, and procedures.",
  "Rekomendasikan dengan alasan.": "Recommend with rationale.",
  "Risiko klaim, kandidat kode, dan kesenjangan dokumentasi yang dapat ditinjau.": "Reviewable claim risks, coding candidates, and documentation gaps.",
  "Baca dokumen": "Read documents",
  "Pahami konteks": "Understand context",
  "Identifikasi risiko": "Identify risks",
  "Tinjau keputusan": "Review decision",
  "Membaca 9 dokumen kunjungan": "Reading 9 encounter documents",
  "RESUME MEDIS / 04": "MEDICAL SUMMARY / 04",
  "· hasil laboratorium tanggal 18 Okt · terkait diagnosis sekunder": "· laboratory result dated 18 Oct · linked to a secondary diagnosis",
  "Resume medis": "Medical summary",
  "4 halaman · 98%": "4 pages · 98%",
  "Hasil laboratorium": "Laboratory results",
  "2 halaman · 96%": "2 pages · 96%",
  "Ekspertise radiologi": "Radiology report",
  "1 halaman · 91%": "1 page · 91%",
  "Resep & tindakan": "Prescriptions & procedures",
  "2 halaman · 94%": "2 pages · 94%",
  "9 / 9 dokumen · 12.4 detik": "9 / 9 documents · 12.4 seconds",
  "Menghubungkan bukti klinis": "Connecting clinical evidence",
  "4 sumber tertaut": "4 linked sources",
  "Gagal jantung": "Heart failure",
  "Laboratorium": "Laboratory",
  "Natrium rendah": "Low sodium",
  "Tindakan": "Procedure",
  "Terapi cairan": "Fluid therapy",
  "3 hari": "3 days",
  "Catatan dokter": "Physician notes",
  "1 encounter · 4 evidence": "1 encounter · 4 evidence items",
  "Dua temuan memerlukan perhatian": "Two findings require attention",
  "Dokumentasi diagnosis sekunder": "Secondary diagnosis documentation",
  "Hiponatremia tercatat di lab, tetapi belum memiliki narasi diagnosis yang lengkap.": "Hyponatremia appears in the laboratory results, but the diagnostic narrative is incomplete.",
  "Kandidat kode E87.1": "Coding candidate E87.1",
  "Bukti lab mendukung. Perlu konfirmasi koder sebelum severity dan grouping.": "Laboratory evidence supports the code. Coder confirmation is required before severity and grouping.",
  "Kelengkapan berkas": "Document completeness",
  "Resume medis, lab, radiologi, dan tindakan tersedia untuk ditelusuri.": "The medical summary, laboratory results, radiology report, and procedures are available for review.",
  "Tinjau. Setujui. Pertahankan jejak keputusan.": "Review. Approve. Retain the decision trail.",
  "siap ditinjau": "ready for review",
  "Rekomendasi siap ditinjau": "Recommendation ready for review",
  "Koder / verifikator klaim": "Coder / claim verifier",
  "Diagnosis sekunder": "Secondary diagnosis",
  "E87.1 · hiponatremia": "E87.1 · hyponatremia",
  "Sumber": "Source",
  "4 dokumen klinis": "4 clinical documents",
  "Keputusan": "Decision",
  "Menunggu review manusia": "Awaiting human review",
  "Dokumen diterima": "Documents received",
  "09:42 · 9 file": "09:42 · 9 files",
  "Evidence graph dibuat": "Evidence graph created",
  "09:42 · 4 sumber": "09:42 · 4 sources",
  "Risiko ditandai": "Risks flagged",
  "09:43 · 2 temuan": "09:43 · 2 findings",
  "Menunggu keputusan": "Awaiting decision",
  "review koder": "coder review",
  "setiap perubahan tercatat": "every change is recorded",
  "03 / Tiga lapisan intelligence": "03 / Three intelligence layers",
  "Satu rantai penalaran.": "One chain of reasoning.",
  "Tiga perspektif keputusan.": "Three decision perspectives.",
  "Dari dokumen yang dipindai hingga keputusan yang dapat dipertanggungjawabkan, Claim Intelligence menyatukan dokumen, konteks klinis, dan dampak terhadap revenue.": "From scanned documents to accountable decisions, Claim Intelligence unifies documents, clinical context, and revenue impact.",
  "Membaca yang tidak terlihat.": "Reading what is not immediately visible.",
  "OCR dan klasifikasi dokumen mengekstrak teks, tabel, serta data klinis, kemudian menyimpannya sebagai bukti yang dapat ditelusuri.": "OCR and document classification extract text, tables, and clinical data, then preserve them as traceable evidence.",
  "Menghubungkan konteks pasien.": "Connecting patient context.",
  "Evidence graph menghubungkan diagnosis, laboratorium, tindakan, dan catatan dokter agar sinyal klinis tidak berhenti pada satu dokumen.": "The evidence graph connects diagnoses, laboratory results, procedures, and physician notes so clinical signals are not confined to a single document.",
  "RESUME MEDIS": "MEDICAL SUMMARY",
  "TINDAKAN": "PROCEDURE",
  "CATATAN DOKTER": "PHYSICIAN NOTES",
  "Mengidentifikasi risiko lebih awal.": "Identifying risk earlier.",
  "Kesenjangan dokumentasi, kandidat kode, dan area yang memerlukan peninjauan dapat diketahui sebelum klaim diajukan.": "Documentation gaps, coding candidates, and areas requiring review can be identified before a claim is submitted.",
  "Dokumentasi": "Documentation",
  "Kelengkapan": "Completeness",
  "Rekomendasi harus": "Recommendations must be",
  "dapat diverifikasi.": "can be verified.",
  "Dalam tata kelola klaim, jawaban yang dapat diperiksa lebih bernilai daripada jawaban yang cepat. Maxy AI menempatkan manusia, sumber, dan jejak keputusan sebagai bagian utama dari alur kerja.": "In claim governance, a verifiable answer is more valuable than a fast one. Maxy AI places people, sources, and the decision trail at the center of the workflow.",
  "Identitas resmi MAXY": "Official MAXY identity",
  "Setiap rekomendasi memiliki sumber.": "Every recommendation has a source.",
  "Setiap sinyal dapat ditelusuri kembali ke halaman, tabel, atau catatan yang membentuknya. Konteks tetap tersedia selama dokumen diproses.": "Every signal can be traced back to the page, table, or note that formed it. Context remains available throughout document processing.",
  "Rekomendasi tidak mengubah klaim secara otomatis. Koder dan verifikator meninjau, menyetujui, atau menolak dengan jejak yang jelas.": "Recommendations do not change claims automatically. Coders and verifiers review, approve, or reject them with a clear audit trail.",
  "Setiap perubahan dapat diaudit.": "Every change is auditable.",
  "Status peninjauan, alasan klinis, dan sumber evidence tersedia sebagai bagian dari alur kerja, bukan ditambahkan setelahnya.": "Review status, clinical rationale, and evidence sources are part of the workflow rather than added afterward.",
  "05 / Dari dokumen ke keputusan": "05 / From documents to decisions",
  "Empat langkah.": "Four steps.",
  "Satu jejak audit.": "One audit trail.",
  "Setiap tahap dirancang untuk menjawab pertanyaan yang sama: apa buktinya, mengapa penting, dan siapa yang mengambil keputusan?": "Each stage is designed to answer the same questions: what is the evidence, why does it matter, and who makes the decision?",
  "Baca.": "Read.",
  "Dokumen klinis diterima, diklasifikasikan, dan diekstrak tanpa kehilangan sumber aslinya.": "Clinical documents are received, classified, and extracted without losing their original source.",
  "Hubungkan.": "Connect.",
  "Evidence graph menyatukan catatan dokter, laboratorium, tindakan, dan diagnosis pada kunjungan yang sama.": "The evidence graph unifies physician notes, laboratory results, procedures, and diagnoses from the same encounter.",
  "Identifikasi.": "Identify.",
  "Risiko, kesenjangan dokumentasi, dan kandidat kode ditampilkan sebagai sinyal yang dapat diperiksa.": "Risks, documentation gaps, and coding candidates are presented as reviewable signals.",
  "Putuskan.": "Decide.",
  "Koder atau verifikator menyetujui perubahan, dan audit trail menyimpan alasan serta sumber yang digunakan.": "A coder or verifier approves the change, and the audit trail records the rationale and sources used.",
  "06 / SIMRS": "06 / Hospital information system",
  "SIMRS yang lengkap.": "A complete hospital information system.",
  "Konteks untuk intelligence.": "Context for intelligence.",
  "Claim Intelligence merupakan bagian dari SIMRS Maxy AI Hospital Intelligence. Lapisan ini membaca data pasien dari registrasi, layanan klinis, penunjang, klaim, hingga revenue dalam satu alur yang konsisten.": "Claim Intelligence is part of the Maxy AI Hospital Intelligence SIMRS. It reads patient data from registration, clinical services, diagnostics, and claims through to revenue within one consistent workflow.",
  "21 modul · satu sumber data": "21 modules · one data source",
  "Registrasi dan identitas pasien.": "Registration and patient identity.",
  "Data master pasien, kunjungan, penjamin, dan riwayat layanan disatukan dalam satu referensi yang konsisten.": "Patient master data, encounters, payers, and service history are unified in one consistent reference.",
  "Pasien": "Patients",
  "Rawat jalan": "Outpatient",
  "Rawat inap": "Inpatient",
  "IGD": "Emergency",
  "Layanan klinis terintegrasi.": "Integrated clinical services.",
  "Dokter, order, farmasi, laboratorium, radiologi, dan kamar operasi menggunakan data kunjungan yang sama.": "Physicians, orders, pharmacy, laboratory, radiology, and operating rooms use the same encounter data.",
  "Farmasi": "Pharmacy",
  "Radiologi": "Radiology",
  "Operasi": "Surgery",
  "Penunjang dan dokumentasi klinis.": "Diagnostics and clinical documentation.",
  "Hasil penunjang, resume medis, dan dokumen klaim disimpan bersama sumber serta status peninjauannya.": "Diagnostic results, medical summaries, and claim documents are stored with their sources and review status.",
  "Dokumen": "Documents",
  "Peninjauan": "Review",
  "Klaim dan integritas revenue.": "Claims and revenue integrity.",
  "Billing, verifikasi klaim, penjamin, dan laporan revenue membaca evidence dari perjalanan pasien yang sama.": "Billing, claim verification, payers, and revenue reporting draw evidence from the same patient journey.",
  "Asuransi": "Insurance",
  "21 modul": "21 modules",
  "Risiko, kandidat kode, evidence, dan keputusan": "Risk, coding candidates, evidence, and decisions",
  "Pasien dan layanan": "Patients and services",
  "Pasien, rawat jalan, rawat inap, IGD, operasi": "Patients, outpatient, inpatient, emergency, surgery",
  "Penunjang": "Diagnostics",
  "Farmasi, laboratorium, radiologi, gizi, MCU": "Pharmacy, laboratory, radiology, nutrition, medical check-up",
  "Pendapatan": "Revenue",
  "Billing, klaim BPJS, asuransi/TPA, keuangan": "Billing, BPJS claims, insurance/TPA, finance",
  "Operasional": "Operations",
  "Inventori, SDM, integrasi, analitik, audit": "Inventory, HR, integrations, analytics, audit",
  "21 modul · satu workspace": "21 modules · one workspace",
  "Claim Intelligence di dalam SIMRS": "Claim Intelligence within the SIMRS",
  "Konteks yang lengkap membuat setiap rekomendasi lebih relevan.": "Complete context makes every recommendation more relevant.",
  "Identitas pasien, layanan klinis, dokumen penunjang, billing, dan audit berada dalam satu workspace. Claim Intelligence dapat menelusuri bukti tanpa berpindah sistem.": "Patient identity, clinical services, diagnostic documents, billing, and audit reside in one workspace. Claim Intelligence can trace evidence without switching systems.",
  "Jelajahi 21 modul": "Explore 21 modules",
  "Tinjau Claim Intelligence": "Review Claim Intelligence",
  "dalam alur kerja rumah sakit.": "within the hospital workflow.",
  "Ikuti satu kunjungan pasien, mulai dari dokumen klinis hingga keputusan klaim, lengkap dengan evidence, sinyal risiko, dan jejak peninjauan oleh manusia.": "Follow a patient encounter from clinical documents to claim decisions, complete with evidence, risk signals, and a human review trail.",
  "Tinjau OCR dokumen": "Review document OCR",
  "Maxy AI Hospital Intelligence. SIMRS dan Claim Intelligence untuk alur rumah sakit yang memerlukan identifikasi risiko lebih awal serta keputusan yang dapat dipertanggungjawabkan.": "Maxy AI Hospital Intelligence. SIMRS and Claim Intelligence for hospital workflows that require earlier risk identification and accountable decisions.",
  "Produk": "Product",
  "Klaim BPJS": "BPJS claims",
  "OCR & dokumen": "OCR & documents",
  "Jelajahi": "Explore",
  "Referensi": "References",
  "Riset pasar": "Market research",
  "Evidence & kontrol": "Evidence & controls",
  "Maxy AI Hospital Intelligence mencakup layanan SIMRS dan Claim Intelligence. Pada alur klaim, tim rumah sakit dapat meninjau risiko sejak pasien dirawat, memeriksa berkas sebelum pengajuan, serta menindaklanjuti klaim BPJS dan asuransi swasta dalam satu dashboard.": "Maxy AI Hospital Intelligence covers SIMRS services and Claim Intelligence. Hospital teams can review risks during care, check claims before submission, and follow up BPJS and private insurance claims in one dashboard.",
  "Pemeriksaan sebelum pengajuan": "Pre-submission review",
  "Tindak lanjut pending": "Pending follow-up",
  "Klaim asuransi swasta": "Private insurance claims",
  "Masalah terdeteksi terlambat.": "Problems found too late.",
  "Pembayaran ikut tertunda.": "Payments are delayed.",
  "Selama perawatan": "During care",
  "Pra-pengajuan": "Before submission",
  "Pending & dispute": "Pending & dispute",
  "Asuransi swasta": "Private insurance",
  "Temukan lebih awal.": "Find issues early.",
  "Periksa sebelum kirim.": "Check before sending.",
  "Pantau sampai selesai.": "Track until resolved.",
  "AI hadir pada": "AI supports",
  "pekerjaan yang nyata.": "real work.",
  "hingga pembayaran.": "to payment.",
  "Periksa lebih awal.": "Review early.",
  "Tindak lanjuti sampai dibayar.": "Follow through to payment.",
  "Cakupan layanan SIMRS": "SIMRS service scope",
  "21 modul dalam cakupan SIMRS.": "21 modules in the SIMRS scope.",
  "Posisi OCR:": "Role of OCR:",
  "Buka tampilan ↗": "Open screen ↗",
  "Buka di dashboard ↗": "Open in dashboard ↗",
  "Lihat klaim asuransi": "View insurance claims",
  "Layanan SIMRS": "SIMRS services",
  "Alur produk": "Product workflow",
  "Solusi untuk rumah sakit": "Solutions for hospitals",
  "Lihat platform": "Explore platform",
  "Solusi klaim rumah sakit": "Hospital claims solution",
  "Jelajahi Claim Intelligence": "Explore Claim Intelligence",
  "BPJS Kesehatan · Asuransi swasta · Tim rumah sakit": "BPJS Healthcare · Private insurance · Hospital teams",
  "Ilustrasi alur kerja Claim Intelligence": "Claim Intelligence workflow illustration",
  "Galeri ini memperlihatkan alur Claim Intelligence: pemeriksaan selama perawatan, pra-pengajuan, penyelesaian pending dan dispute BPJS, serta klaim asuransi swasta.": "This gallery shows the Claim Intelligence workflow: review during care, pre-submission checks, BPJS pending and dispute resolution, and private insurance claims.",
  "ilustrasi produk": "product illustration",
  "Ilustrasi berikut menunjukkan bagaimana tim rumah sakit menangani temuan klaim dari pelayanan hingga pembayaran.": "These illustrations show how hospital teams handle claim findings from care through payment.",
  "Setiap temuan dapat ditinjau bersama alasan, bukti, dan penanggung jawabnya. Dokter, koder, serta tim klaim tetap memegang keputusan.": "Each finding can be reviewed with its rationale, evidence, and owner. Clinicians, coders, and claims teams retain decision authority.",
  "Temuan ditampilkan bersama konteks kasus dan alasan pemeriksaan agar petugas dapat memeriksa sumber yang tersedia.": "Findings include case context and review rationale so staff can inspect the available sources.",
  "Alur kerja dimulai dari catatan klinis, dilanjutkan dengan pengodean dan pemeriksaan berkas, lalu ditutup dengan tindak lanjut serta pembayaran klaim.": "The workflow starts with clinical records, continues through coding and document checks, and closes with claim follow-up and payment.",
  "Maxy AI Hospital Intelligence mencakup layanan SIMRS dan Claim Intelligence. Data dari pendaftaran, pelayanan, penunjang, dan tagihan memberi konteks bagi pemeriksaan klaim rumah sakit.": "Maxy AI Hospital Intelligence covers SIMRS services and Claim Intelligence. Registration, care, diagnostics, and billing data provide context for hospital claim reviews.",
  "Alur klaim tersedia": "Claims workflow available",
  "Cakupan SIMRS Maxy AI meliputi pendaftaran, layanan klinis, penunjang, pendapatan, dan operasional. Claim Intelligence menghubungkan data tersebut untuk membantu pemeriksaan klaim.": "The Maxy AI SIMRS scope includes registration, clinical care, diagnostics, revenue, and operations. Claim Intelligence connects this data to support claim reviews.",
  "SIMRS dan Claim Intelligence dalam satu ekosistem.": "SIMRS and Claim Intelligence in one ecosystem.",
  "Jelajahi alur BPJS dan asuransi swasta dari sisi rumah sakit.": "Explore BPJS and private insurance workflows from the hospital perspective.",
  "Jelajahi Claim Intelligence ↗": "Explore Claim Intelligence ↗",
  "Data layanan, penunjang, dan tagihan membantu tim RS meninjau kesiapan klaim. Setiap temuan dapat dilihat bersama alasan dan tindak lanjutnya.": "Care, diagnostic, and billing data help hospital teams review claim readiness. Every finding can be viewed with its rationale and next action.",
  "Jelajahi alur klaim": "Explore claims workflow",
  "Dari pelayanan hingga pembayaran klaim": "From care through claim payment",
  "MAXY AI membantu rumah sakit meninjau klaim dengan konteks klinis, bukti pendukung, dan tindak lanjut yang jelas. Keputusan klinis, pengodean, serta persetujuan klaim tetap berada pada pihak yang berwenang.": "MAXY AI helps hospitals review claims with clinical context, supporting evidence, and clear follow-up. Clinical decisions, coding, and claim approval remain with authorized teams.",
  "© 2026 MAXY AI": "© 2026 MAXY AI",
  "Pintu Masuk Platform": "Platform Access Portal",
  "Pilih sistem dashboard tujuan Anda untuk melanjutkan:": "Select your destination dashboard to continue:",
  "SIMRS Intelligence": "SIMRS Intelligence",
  "Sistem Manajemen RS": "Hospital Management System",
  "Claim Intelligence": "Claim Intelligence",
  "Audit & Verifikasi Klaim": "Claim Audit & Verification",
  "Audit &amp; Verifikasi Klaim": "Claim Audit & Verification",
  "Email / NIP Akun": "Email / Staff ID",
  "Kata Sandi": "Password",
  "Masuk ke Dashboard SIMRS Health Intelligence": "Enter SIMRS Health Intelligence Dashboard",
  "Masuk ke Claim Intelligence": "Enter Claim Intelligence Dashboard",
  "Akses langsung:": "Direct access:",
  "SIMRS Workspace ↗": "SIMRS Workspace ↗",
  "Claim Intelligence ↗": "Claim Intelligence ↗",
  "Jelajahi produk": "Explore product",
  "Bukti untuk klaim yang siap diajukan.": "Evidence for claims ready to submit.",
  "MAXY / CLAIM INTELLIGENCE": "MAXY / CLAIM INTELLIGENCE",
  "EVIDENCE / CONTEXT / DECISION": "EVIDENCE / CONTEXT / DECISION",
  "Scroll": "Scroll",
  "Catatan klinis": "Clinical notes",
  "Pemeriksaan kode": "Coding review",
  "Temuan klaim": "Claim findings",
  "Keputusan petugas": "Staff decisions",
  "Pantau pembayaran": "Track payments",
  "Jejak tindak lanjut": "Follow-up trail",
  "01 / Claim intelligence": "01 / Claim intelligence",
  "Dari pelayanan menuju": "From care to",
  "Claim Intelligence membantu tim klaim melihat masalah lebih awal.": "Claim Intelligence helps claims teams spot issues earlier.",
  "Data kunjungan, catatan klinis, kode, bukti penunjang, dan tagihan dapat diperiksa bersama sebelum pengajuan.": "Encounter data, clinical notes, codes, supporting evidence, and bills can be reviewed together before submission.",
  "AI Verifier menandai ketidaksesuaian dan menampilkan alasan untuk ditinjau dokter, koder, dan tim klaim. Setelah pengajuan, status pending, dispute, dan pembayaran dapat dipantau hingga selesai.": "AI Verifier flags discrepancies and shows the rationale for clinicians, coders, and claims teams to review. After submission, pending claims, disputes, and payments can be tracked through resolution.",
  "Temukan celah · tugaskan perbaikan · pantau pembayaran": "Find gaps · assign fixes · track payments",
  "TAHAP": "STAGES",
  "Selama perawatan, sebelum, dan sesudah pengajuan.": "During care, before submission, and afterward.",
  "Pemeriksaan dimulai sebelum klaim masuk ke BPJS.": "Review starts before claims reach BPJS.",
  "KLAIM": "CLAIM",
  "Temuan dan tindak lanjut terlihat bersama.": "Findings and follow-up appear together.",
  "Tim dapat melihat pemilik tugas dan status perbaikan.": "Teams can see task owners and the status of each fix.",
  "DITINJAU": "REVIEWED",
  "Dokter, koder, dan tim klaim tetap mengambil keputusan.": "Clinicians, coders, and claims teams remain responsible for decisions.",
  "02 / Masalah klaim": "02 / Claim challenges",
  "Dokter, koder, tim klaim, dan keuangan bekerja pada tahap yang berbeda. Saat catatan, kode, SEP, bukti, dan tagihan baru dicocokkan di akhir, kekurangan berkas memicu perbaikan, pending, atau dispute.": "Clinicians, coders, claims teams, and finance work at different stages. When notes, codes, SEP, evidence, and bills are matched only at the end, missing documents lead to rework, pending claims, or disputes.",
  "Saat pasien dirawat.": "While the patient is in care.",
  "Catatan atau bukti yang belum lengkap masih bisa diklarifikasi kepada dokter.": "Missing notes or evidence can still be clarified with the clinician.",
  "Sebelum klaim diajukan.": "Before the claim is submitted.",
  "Koder dan tim klaim memeriksa kecocokan kode, resume, SEP, dan tagihan.": "Coders and claims teams check codes, medical summaries, SEP, and bills for consistency.",
  "Sesudah hasil verifikasi.": "After verification.",
  "Pending, dispute, serta pembayaran memerlukan penanggung jawab sampai selesai.": "Pending claims, disputes, and payments need an owner through resolution.",
  "Ringkasan klaim": "Claims overview",
  "03 / The intelligence layer": "03 / The intelligence layer",
  "Periksa catatan dan bukti ketika pasien masih dirawat.": "Review notes and evidence while the patient is still in care.",
  "AI Verifier membantu tim klaim meninjau SEP, resume, kode, bukti, dan tagihan.": "AI Verifier helps claims teams review SEP, summaries, codes, evidence, and bills.",
  "Alasan pending, tindak lanjut, dan pembayaran terlihat dalam alur kerja.": "Reasons for pending claims, follow-up, and payments remain visible in the workflow.",
  "01 / BPJS": "01 / BPJS",
  "02 / BPJS": "02 / BPJS",
  "03 / BPJS": "03 / BPJS",
  "04 / ASURANSI": "04 / INSURANCE",
  "Kasus pasien yang masih dirawat dan memerlukan tindak lanjut.": "Active patient cases that need follow-up.",
  "Antrean klaim dan pemeriksaan AI Verifier sebelum pengajuan.": "Claims queue and AI Verifier checks before submission.",
  "Temuan hasil verifikasi dan pekerjaan yang perlu diselesaikan.": "Verification findings and tasks that need resolution.",
  "Alur cashless serta pemantauan tagihan dan pembayaran dari sisi RS.": "Cashless workflow and hospital-side bill and payment tracking.",
  "04 / Titik bantuan AI": "04 / Where AI helps",
  "01 / PERAWATAN": "01 / DURING CARE",
  "Celah terlihat lebih awal.": "Gaps become visible earlier.",
  "AI membantu menandai catatan dan bukti yang perlu ditinjau saat pasien masih dirawat.": "AI flags notes and evidence for review while the patient is still in care.",
  "1 temuan AI": "1 AI finding",
  "CATATAN PELAYANAN": "CARE NOTES",
  "Bukti tindakan perlu dilengkapi": "Procedure evidence needs completion",
  "Catatan dokter belum memuat dasar tindakan yang ditagihkan.": "The physician's notes do not yet explain the billed procedure.",
  "Untuk DPJP": "For the attending physician",
  "Tinjau dan lengkapi catatan klinis": "Review and complete clinical notes",
  "02 / PRA-PENGAJUAN": "02 / BEFORE SUBMISSION",
  "Berkas diperiksa sebelum kirim.": "Review documents before submission.",
  "AI Verifier menunjukkan klaim yang belum diperiksa dan temuan yang perlu diselesaikan koder serta tim klaim.": "AI Verifier highlights unchecked claims and findings for coders and claims teams to resolve.",
  "Pemeriksaan klaim": "Claim review",
  "SEP & identitas": "SEP & identity",
  "Sesuai": "Valid",
  "Lengkap": "Complete",
  "Kode diagnosis": "Diagnosis code",
  "Perlu tinjau": "Needs review",
  "Tagihan": "Bill",
  "1 temuan untuk koder sebelum pengajuan": "1 finding for the coder before submission",
  "03 / TINDAK LANJUT": "03 / FOLLOW-UP",
  "Klaim dipantau hingga selesai.": "Track claims through resolution.",
  "Pending dan dispute diberi tindak lanjut, sementara status pembayaran tetap terlihat.": "Pending claims and disputes receive follow-up while payment status remains visible.",
  "Tindak lanjut klaim": "Claim follow-up",
  "Pending": "Pending",
  "TEMUAN VERIFIKASI": "VERIFICATION FINDINGS",
  "Klarifikasi bukti pelayanan": "Clarify care evidence",
  "Diterima": "Received",
  "Ditugaskan": "Assigned",
  "Diajukan ulang": "Resubmitted",
  "PIC: Tim klaim": "Owner: Claims team",
  "Minta klarifikasi kepada DPJP": "Request clarification from the attending physician",
  "05 / Workspace klaim rumah sakit": "05 / Hospital claims workspace",
  "Dashboard memisahkan alur BPJS dan asuransi swasta, lalu menunjukkan siapa yang perlu bertindak pada setiap tahap.": "The dashboard separates BPJS and private insurance workflows and shows who needs to act at each stage.",
  "Dokter dan koder mendapat kesempatan memperbaiki catatan sebelum pasien pulang.": "Clinicians and coders can correct notes before discharge.",
  "Sebelum pengajuan": "Before submission",
  "AI Verifier membantu tim klaim memeriksa SEP, resume, kode, bukti, dan tagihan.": "AI Verifier helps claims teams check SEP, summaries, codes, evidence, and bills.",
  "Setelah hasil BPJS": "After BPJS verification",
  "Pending dan dispute dikelola sebagai pekerjaan dengan alasan serta tindak lanjut.": "Pending claims and disputes are managed as tasks with reasons and follow-up.",
  "Tim RS memantau manfaat, penjaminan, cashless, dan dokumen reimbursement.": "Hospital teams track benefits, coverage, cashless claims, and reimbursement documents.",
  "AI memberi temuan; petugas mengambil keputusan.": "AI identifies findings; staff make decisions.",
  "Dokter": "Clinician",
  "Koder": "Coder",
  "Tim klaim": "Claims team",
  "Keuangan RS": "Hospital finance",
  "01 / SOURCE": "01 / SOURCE",
  "02 / CONTROL": "02 / CONTROL",
  "AI membantu menemukan dan memprioritaskan masalah. Dokter, koder, dan tim klaim tetap memeriksa sebelum perubahan diterapkan.": "AI helps find and prioritize issues. Clinicians, coders, and claims teams review them before any change is made.",
  "03 / AUDIT": "03 / AUDIT",
  "Status dan tindak lanjut dicatat per kasus sehingga pekerjaan dapat ditelusuri kembali oleh tim rumah sakit.": "Status and follow-up are recorded for each case so hospital teams can trace the work.",
  "07 / Alur klaim rumah sakit": "07 / Hospital claims workflow",
  "01 / DOKTER": "01 / CLINICIAN",
  "Catat.": "Document.",
  "Diagnosis, tindakan, dan bukti pelayanan dilengkapi selama pasien dirawat.": "Diagnoses, procedures, and care evidence are completed during the patient's stay.",
  "catatan klinis · bukti": "clinical notes · evidence",
  "02 / KODER": "02 / CODER",
  "Kodekan.": "Code.",
  "Koder memeriksa kesesuaian kode dengan catatan dan meminta klarifikasi bila perlu.": "The coder checks codes against notes and requests clarification when needed.",
  "kode · konfirmasi klinis": "codes · clinical confirmation",
  "03 / TIM KLAIM": "03 / CLAIMS TEAM",
  "Periksa.": "Review.",
  "AI Verifier membantu menunjukkan kekurangan sebelum klaim diajukan melalui alur BPJS atau penjamin.": "AI Verifier helps identify gaps before claims are submitted to BPJS or an insurer.",
  "SEP · resume · tagihan": "SEP · summary · bill",
  "04 / KEUANGAN": "04 / FINANCE",
  "Pantau.": "Track.",
  "Pending, dispute, persetujuan, dan pembayaran ditindaklanjuti hingga selesai.": "Pending claims, disputes, approvals, and payments are tracked through resolution.",
  "status · tugas · pembayaran": "status · tasks · payments",
  "Katalog layanan SIMRS": "SIMRS service catalog",
  "Medical check-up": "Medical check-up",
  "Dokumen klaim": "Claim documents",
  "SATUSEHAT & FHIR": "SATUSEHAT & FHIR",
  "Jelajahi antrean klaim BPJS, tindak lanjut pending, serta alur cashless dan reimbursement asuransi swasta dari sisi rumah sakit.": "Explore BPJS claim queues and pending follow-up, plus hospital-side cashless and reimbursement workflows for private insurance.",
  "Pilihan Tujuan Dashboard": "Choose a dashboard",
  "Klaim asuransi": "Insurance claims",
  "IKHTISAR": "OVERVIEW",
  "Ringkasan": "Overview",
  "BPJS KESEHATAN": "BPJS HEALTHCARE",
  "Analitik BPJS": "BPJS analytics",
  "ASURANSI SWASTA": "PRIVATE INSURANCE",
  "Manfaat & penjaminan": "Benefits & coverage",
  "Klaim & pembayaran": "Claims & payments",
  "· Tipe B · Jakarta Timur": "· Type B · East Jakarta",
  "Okt 2026": "Oct 2026",
  "Ilustrasi": "Illustration",
  "PUSAT KENDALI KLAIM": "CLAIMS CONTROL CENTER",
  "BPJS dan asuransi swasta dalam satu pandangan.": "BPJS and private insurance in one view.",
  "JKN · SEP · koding · E-Klaim": "JKN · SEP · coding · E-Claim",
  "Cashless RS · tagihan ke penjamin": "Hospital cashless · insurer billing",
  "Diajukan": "Submitted",
  "Tagihan final": "Final bill",
  "Layak": "Eligible",
  "Disetujui": "Approved",
  "Dibayar": "Paid",
  "Dibayar RS": "Paid to hospital",
  "Nilai klaim": "Claim amount",
  "1.860 berkas": "1,860 files",
  "Tingkat pending": "Pending rate",
  "turun 0,8 poin": "down 0.8 points",
  "Menunggu selesai": "Awaiting resolution",
  "214 berkas": "214 files",
  "Pulang → ajukan": "Discharge → submission",
  "4,1 hari": "4.1 days",
  "Sep: 4,9 hari": "Sep: 4.9 days",
  "Nov 2025 – Okt 2026": "Nov 2025 – Oct 2026",
  "Perlu ditindaklanjuti": "Needs follow-up",
  "Pasien aktif berisiko": "At-risk active patients",
  "Tinjau bukti klinis": "Review clinical evidence",
  "Klaim belum diperiksa": "Unchecked claims",
  "Jalankan AI Verifier": "Run AI Verifier",
  "Tetapkan tindak lanjut": "Assign follow-up",
  "BPJS · SEJAK PASIEN DIRAWAT": "BPJS · FROM THE START OF CARE",
  "Kendali mutu dan biaya": "Quality and cost control",
  "Temuan terlihat sebelum pasien pulang.": "Findings appear before discharge.",
  "01 · DATA": "01 · DATA",
  "Sinkronkan rekam medis": "Sync medical records",
  "Diagnosa, tindakan, penunjang": "Diagnoses, procedures, diagnostics",
  "02 · TINJAU": "02 · REVIEW",
  "Temukan kekurangan": "Find gaps",
  "Catatan dan kode diperiksa": "Review notes and codes",
  "03 · BANDINGKAN": "03 · COMPARE",
  "Pantau biaya": "Track costs",
  "Billing vs estimasi tarif": "Billing vs estimated tariff",
  "04 · PUTUSKAN": "04 · DECIDE",
  "Tindak lanjut manusia": "Human follow-up",
  "DPJP, koder, tim klaim": "Clinician, coder, claims team",
  "Pasien aktif": "Active patients",
  "Dalam pemantauan": "Under review",
  "Prioritas tinggi": "High priority",
  "Perlu telaah segera": "Needs prompt review",
  "Temuan dokumen/kode": "Document/code findings",
  "Perlu ditinjau": "Needs review",
  "Billing di atas estimasi": "Billing above estimate",
  "Cek biaya dan klinis": "Check costs and clinical data",
  "Pasien rawat aktif": "Active inpatients",
  "Buka kasus untuk melihat bukti dan PIC.": "Open a case to view evidence and owner.",
  "Cari pasien, dokter, atau diagnosis": "Search patient, physician, or diagnosis",
  "Semua risiko": "All risks",
  "Semua unit": "All units",
  "PASIEN / DIAGNOSIS": "PATIENT / DIAGNOSIS",
  "UNIT / DPJP": "UNIT / PHYSICIAN",
  "LAMA RAWAT": "LENGTH OF STAY",
  "TEMUAN AI": "AI FINDINGS",
  "Demam berdarah": "Dengue fever",
  "Penyakit Dalam": "Internal medicine",
  "Pneumonia": "Pneumonia",
  "Paru": "Pulmonology",
  "5 hari": "5 days",
  "Jantung": "Cardiology",
  "4 hari": "4 days",
  "SEBELUM PENGAJUAN": "BEFORE SUBMISSION",
  "Antrean klaim": "Claims queue",
  "14 klaim baru menunggu pemeriksaan · 41 perlu perbaikan": "14 new claims awaiting review · 41 need fixes",
  "Cari SEP, pasien, atau diagnosis": "Search SEP, patient, or diagnosis",
  "Semua status": "All statuses",
  "Risiko tertinggi": "Highest risk",
  "KLAIM / PASIEN": "CLAIM / PATIENT",
  "STATUS": "STATUS",
  "RISIKO": "RISK",
  "ESTIMASI": "ESTIMATE",
  "Rawat inap · 14 Okt": "Inpatient · 14 Oct",
  "Belum diperiksa": "Not reviewed",
  "Menunggu AI Verifier": "Awaiting AI Verifier",
  "Perlu perbaikan": "Needs fixes",
  "Resume perlu tanda tangan": "Summary needs signature",
  "Kode perlu tinjauan": "Code needs review",
  "Rawat inap · 13 Okt": "Inpatient · 13 Oct",
  "Siap diajukan": "Ready to submit",
  "Temuan selesai": "Findings resolved",
  "Rawat jalan · 13 Okt": "Outpatient · 13 Oct",
  "SETELAH PENGAJUAN": "AFTER SUBMISSION",
  "Berkas yang dikembalikan memiliki tindak lanjut dan PIC.": "Returned claims have follow-up and an owner.",
  "Nilai pending": "Pending amount",
  "6 berkas": "6 files",
  "Nilai dispute": "Dispute amount",
  "2 berkas": "2 files",
  "Lewat 7 hari": "Over 7 days",
  "4 berkas": "4 files",
  "Perlu prioritas": "Needs priority",
  "Baru dikembalikan": "Recently returned",
  "Rutekan ke DPJP": "Route to physician",
  "Dirutekan": "Routed",
  "Dispute": "Dispute",
  "Buat draf jawaban": "Draft response",
  "Draf jawaban siap": "Response draft ready",
  "Ajukan ulang": "Resubmit",
  "Klaim rawat inap": "Inpatient claim",
  "Menunggu BPJS": "Awaiting BPJS",
  "Klaim dan pembayaran": "Claims and payments",
  "Cashless: RS menagih asuransi dan mencocokkan pembayaran masuk.": "Cashless: the hospital bills the insurer and reconciles incoming payments.",
  "RS menagih asuransi": "Hospital bills insurer",
  "RS bantu berkas pasien": "Hospital assists with documents",
  "Cek polis": "Check policy",
  "AI: manfaat & limit": "AI: benefits & limits",
  "Jaminan awal": "Initial guarantee",
  "AI: berkas & respons": "AI: documents & response",
  "Tagihan akhir": "Final bill",
  "AI: biaya vs keputusan": "AI: cost vs decision",
  "Pembayaran": "Payment",
  "AI: selisih & piutang": "AI: variance & receivables",
  "Kasus": "Cases",
  "Perlu tindakan": "Action needed",
  "Belum ditindaklanjuti": "No follow-up yet",
  "Bagian pasien": "Patient share",
  "Bukan pembayaran RS": "Not hospital payment",
  "Belum dibayar RS": "Not yet paid to hospital",
  "Selisih disetujui – dibayar": "Approved–paid difference",
  "Kasus cashless": "Cashless cases",
  "Cari klaim, pasien, asuransi": "Search claim, patient, or insurer",
  "Semua tahap": "All stages",
  "Semua prioritas": "All priorities",
  "ASURANSI": "INSURANCE",
  "TEMUAN AI · PIC": "AI FINDINGS · OWNER",
  "TAGIHAN": "BILL",
  "Rawat inap · Okt 2026": "Inpatient · Oct 2026",
  "Cek manfaat kamar": "Check room benefits",
  "Belum ada respons": "No response yet",
  "Selisih biaya obat": "Medication cost difference",
  "ASURANSI SWASTA · SEBELUM TAGIHAN AKHIR": "PRIVATE INSURANCE · BEFORE FINAL BILL",
  "Manfaat dan penjaminan": "Benefits and coverage",
  "Periksa kasus sebelum pasien pulang.": "Review cases before discharge.",
  "AI: status & limit": "AI: status & limits",
  "AI: lampiran & respons": "AI: attachments & response",
  "Selama dirawat": "During care",
  "AI: perubahan layanan": "AI: care changes",
  "Jaminan akhir": "Final guarantee",
  "AI: tagihan vs manfaat": "AI: bill vs benefits",
  "Sebelum jaminan akhir": "Before final guarantee",
  "Pemilik tugas belum selesai": "Open assigned tasks",
  "Berkas belum lengkap": "Documents incomplete",
  "Periksa lampiran": "Check attachments",
  "Kasus penjaminan": "Coverage cases",
  "7 kasus contoh": "7 sample cases",
  "PIC: Admisi / tim klaim": "Owner: Admissions / claims team",
  "Jaminan awal belum masuk": "Initial guarantee not received",
  "Resume akhir belum ada": "Final summary missing",
  "Kelas kamar di atas manfaat": "Room class exceeds benefits",
  "Tindakan menunggu persetujuan": "Procedure awaiting approval",
  "AS-26-1047 · Cek polis": "AS-26-1047 · Check policy",
  "AS-26-1270 · Jaminan awal": "AS-26-1270 · Initial guarantee",
  "AS-26-1493 · Jaminan akhir": "AS-26-1493 · Final guarantee",
  "AS-26-1716 · Jaminan akhir": "AS-26-1716 · Final guarantee",
  "AS-26-1939 · Cek polis": "AS-26-1939 · Check policy",
  "AS-26-2162 · Jaminan awal": "AS-26-2162 · Initial guarantee",
  "Selisih obat Rp 4,4 jt": "Medication difference Rp 4.4 million",
  "Ikhtisar": "Overview",
  "Prototipe interaktif": "Interactive prototype",
  "Keputusan tetap pada petugas RS dan penjamin.": "Decisions remain with hospital staff and insurers.",
  "Ruang kerja klaim": "Claims workspace",
  "Periode": "Period",
  "Pusat kendali klaim": "Claims control center",
  "Pantau klaim yang perlu tindakan dan pembayaran yang belum masuk.": "Track claims that need action and payments still outstanding.",
  "Buka antrian": "Open queue",
  "JKN · alur SEP, koding, E-Klaim": "JKN · SEP, coding, E-Claim workflow",
  "Tagihan final · 5 kasus": "Final bills · 5 cases",
  "Disetujui penjamin": "Approved by insurer",
  "Dibayar ke RS": "Paid to hospital",
  "Ringkasan ini mencakup 1.860 klaim yang diajukan pada Oktober 2026. Daftar kerja di halaman lain hanya contoh terpilih: 64 klaim sebelum pengajuan, 10 pasien aktif, dan 10 kasus pending/dispute. Angkanya tidak untuk dijumlahkan menjadi total periode.": "This overview covers 1,860 claims submitted in October 2026. Worklists on other pages show selected examples only: 64 pre-submission claims, 10 active patients, and 10 pending or disputed cases. Do not add those worklists to calculate the period total.",
  "↓ 0,8 poin": "↓ 0.8 points",
  "Hari ke pengajuan": "Days to submission",
  "Garis putus-putus = awal simulasi. Tren ini bukan bukti dampak produk.": "The dashed line marks the start of the simulation. This trend does not prove product impact.",
  "Tugas yang menunggu keputusan": "Tasks awaiting decisions",
  "Nilai klaim per status": "Claim value by status",
  "Total Rp 12,4 M · 1.860 berkas": "Total Rp 12.4 billion · 1,860 files",
  "Dari Rp 12,4 M yang diajukan: Rp 10,2 M dinilai layak, Rp 1 M pending, Rp 700 jt dispute, dan Rp 500 jt tidak layak. Dari nilai yang layak, Rp 8,7 M sudah dibayar dan Rp 1,5 M masih menunggu pembayaran. Status dan pembayaran adalah dua hal berbeda.": "Of Rp 12.4 billion submitted, Rp 10.2 billion was deemed eligible, Rp 1 billion is pending, Rp 700 million is disputed, and Rp 500 million is ineligible. Of the eligible amount, Rp 8.7 billion has been paid and Rp 1.5 billion awaits payment. Claim status and payment are separate measures.",
  "Aktivitas AI agent hari ini": "AI agent activity today",
  "Klik untuk membuka klaim": "Click to open a claim",
  "Potensi kode periode · simulasi": "Potential coding opportunities · simulation",
  "BPJS · sejak pasien dirawat": "BPJS · from the start of care",
  "Tinjau temuan sebelum pasien pulang.": "Review findings before discharge.",
  "CPPT, diagnosis, tindakan, penunjang, dan billing dari SIMRS.": "CPPT, diagnoses, procedures, diagnostics, and billing from SIMRS.",
  "AI menandai bukti yang belum lengkap dan kode yang perlu diperiksa.": "AI flags incomplete evidence and codes that need review.",
  "Bandingkan biaya berjalan dengan estimasi tarif secara ilustratif.": "Compare ongoing costs with illustrative tariff estimates.",
  "DPJP, koder, dan KMKB mencatat keputusan dan sumbernya.": "Physicians, coders, and KMKB staff record decisions and sources.",
  "0 kasus": "0 cases",
  "Perlu telaah": "Needs review",
  "Terpantau": "Monitored",
  "Pasien / diagnosis": "Patient / diagnosis",
  "Unit / DPJP": "Unit / physician",
  "Temuan AI": "AI findings",
  "Billing / estimasi": "Billing / estimate",
  "Estimasi tarif dan risiko pada prototipe adalah simulasi. Validasi kode dan keputusan klinis tetap dilakukan petugas berwenang.": "Tariff estimates and risks in this prototype are simulated. Authorized staff remain responsible for code validation and clinical decisions.",
  "Antrian klaim": "Claims queue",
  "Memuat klaim…": "Loading claims…",
  "Disetujui koder": "Approved by coder",
  "Pulang terbaru": "Most recently discharged",
  "Nilai terbesar": "Highest value",
  "Klaim / Pasien": "Claim / patient",
  "Estimasi tarif*": "Estimated tariff*",
  "Muat 12 klaim lagi": "Load 12 more claims",
  "Setelah pengajuan": "After submission",
  "Tindak lanjuti klaim yang dikembalikan BPJS.": "Follow up claims returned by BPJS.",
  "Asuransi swasta · sebelum tagihan akhir": "Private insurance · before final billing",
  "Semua klaim": "All claims",
  "Cashless: RS menagih asuransi dan mencocokkan pembayaran yang masuk.": "Cashless: the hospital bills insurers and reconciles incoming payments.",
  "Pilih jalur klaim": "Choose a claims pathway",
  "Keputusan dan pembayaran asuransi kepada pasien berada di luar dashboard RS.": "Insurer decisions and payments to patients are outside the hospital dashboard.",
  "Pasien bayar RS": "Patient pays hospital",
  "Pembayaran RS lunas": "Hospital payment settled",
  "RS cek berkas": "Hospital checks documents",
  "AI: kuitansi & lampiran": "AI: receipts & attachments",
  "RS serahkan berkas": "Hospital provides documents",
  "Untuk pasien": "For the patient",
  "Pasien ajukan": "Patient submits",
  "Di luar sistem RS": "Outside hospital system",
  "Simulasi tanpa penjamin kedua. Dari 5 tagihan final Rp 69,6 jt: Rp 52 jt disetujui asuransi, Rp 7,8 jt menjadi bagian pasien, dan Rp 9,8 jt belum mendapat keputusan. Bagian pasien belum berarti sudah dibayar.": "Simulation without a secondary insurer. Of five final bills totaling Rp 69.6 million, Rp 52 million is approved by insurers, Rp 7.8 million is the patient's share, and Rp 9.8 million has no decision yet. The patient's share does not mean it has been paid.",
  "Selesai": "Complete",
  "Dalam proses": "In progress",
  "Klaim / pasien": "Claim / patient",
  "Tahap": "Stage",
  "Temuan AI · PIC": "AI findings · owner",
  "Biaya / tagihan": "Cost / bill",
  "Analitik": "Analytics",
  "Pola pending dan margin": "Pending and margin patterns",
  "Temukan penyebab pending dan kasus berisiko.": "Find causes of pending claims and at-risk cases.",
  "Alasan klaim belum selesai": "Reasons claims remain unresolved",
  "214 berkas pending dan dispute · periode Oktober": "214 pending and disputed files · October period",
  "Pending per DPJP": "Pending by physician",
  "Klaim": "Claims",
  "Estimasi tarif paket vs biaya pelayanan": "Estimated package tariff vs care costs",
  "Rata-rata per kasus · juta rupiah": "Average per case · million rupiah",
  "Watchlist batas pengajuan awal": "Initial submission deadline watchlist",
  "5 contoh dari 37 klaim yang belum diajukan · tenggat 6 bulan setelah pelayanan selesai": "5 examples of 37 unsubmitted claims · deadline 6 months after care ends",
  "Nilai": "Value",
  "Hambatan": "Obstacle",
  "Sisa waktu": "Time remaining",
  "Seluruh kasus dan angka adalah simulasi. Nama perusahaan asuransi hanya contoh, tanpa kerja sama yang dinyatakan. Tarif paket dan manfaat polis hanya simulasi.": "All cases and figures are simulated. Insurance company names are examples only and imply no partnership. Package tariffs and policy benefits are simulated.",
  "Fasilitas aktif": "Active facility",
  "Tipe B · Jakarta Timur": "Type B · East Jakarta",
  "Semua sistem normal": "All systems operational",
  "Buka landing page": "Open landing page",
  "Pilih role pengguna": "Select user role",
  "Pendaftaran": "Registration",
  "Perawat": "Nurse",
  "Casemix": "Casemix",
  "Keuangan": "Finance",
  "Pasien baru": "New patient",
  "JavaScript dibutuhkan.": "JavaScript is required.",
  "Dashboard ini menggunakan JavaScript untuk seluruh interaksi demo.": "This dashboard uses JavaScript for all demo interactions."
};
Object.assign(translations,{
  "Ringkasan operasional rumah sakit": "Hospital operations overview",
  "Kinerja layanan dan pendapatan": "Care and revenue performance",
  "Pasien & pendaftaran": "Patients & registration",
  "Master pasien, registrasi, dan rekam kunjungan": "Patient master records, registration, and encounter history",
  "Pasien & layanan": "Patients & care",
  "Antrean dan jadwal poliklinik": "Outpatient queues and schedules",
  "Tempat tidur dan census pasien": "Hospital beds and patient census",
  "Triage dan pelayanan gawat darurat": "Triage and emergency care",
  "Jadwal kamar operasi dan tindakan": "Operating room and procedure schedules",
  "Resep, dispensing, dan stok obat": "Prescriptions, dispensing, and medication stock",
  "Order, hasil, dan validasi lab": "Lab orders, results, and validation",
  "Order imaging dan ekspertise": "Imaging orders and reports",
  "Diet order dan asuhan gizi": "Diet orders and nutrition care",
  "Paket dan pemeriksaan kesehatan": "Packages and health examinations",
  "Billing & kasir": "Billing & cashier",
  "Invoice, pembayaran, dan kasir": "Invoices, payments, and cashier",
  "Verifikasi, koding, dan pending": "Verification, coding, and pending claims",
  "OCR & dokumen": "OCR & documents",
  "Ekstraksi dokumen klinis dan klaim": "Clinical and claim document extraction",
  "Asuransi & TPA": "Insurance & TPA",
  "Benefit, otorisasi, dan reimbursement": "Benefits, authorizations, and reimbursement",
  "Revenue, AR, dan laporan keuangan": "Revenue, accounts receivable, and financial reports",
  "Stok farmasi dan logistik": "Pharmacy and logistics stock",
  "SDM & payroll": "HR & payroll",
  "Staf, absensi, dan penggajian": "Staff, attendance, and payroll",
  "SATUSEHAT, VClaim, FHIR, dan API": "SATUSEHAT, VClaim, FHIR, and APIs",
  "Jejak aktivitas dan kontrol akses": "Activity trail and access control",
  "Kamis, 22 Okt 2026": "Thursday, 22 Oct 2026",
  "Maya.": "Maya.",
  "dari kemarin": "since yesterday",
  "utilisasi": "utilization",
  "vs rata-rata": "vs average",
  "5 risiko tinggi": "5 high-risk cases",
  "Volume layanan": "Care volume",
  "Kunjungan & rawat inap · 16–22 Oktober 2026": "Visits & inpatient care · 16–22 October 2026",
  "Puncak hari ini: 358 pasien": "Peak today: 358 patients",
  "Worklist lintas unit": "Cross-unit worklist",
  "Tindakan yang menunggu perhatian hari ini": "Tasks needing attention today",
  "Lihat analitik": "View analytics",
  "5 klaim berisiko tinggi menunggu review": "5 high-risk claims awaiting review",
  "Casemix · verifier menemukan 2 saran kode": "Casemix · verifier found 2 coding suggestions",
  "18 dokumen OCR belum tervalidasi": "18 OCR documents awaiting validation",
  "Resume medis, invoice, dan SEP · akurasi 96,2%": "Medical summaries, invoices, and SEP · 96.2% accuracy",
  "Buka OCR": "Open OCR",
  "4 pasien direncanakan pulang hari ini": "4 patients scheduled for discharge today",
  "Rawat inap · Melati, Mawar, Anggrek": "Inpatient · Melati, Mawar, Anggrek",
  "3 resep prioritas sedang disiapkan": "3 priority prescriptions being prepared",
  "Farmasi · 1 resep dari IGD": "Pharmacy · 1 prescription from the emergency department",
  "Modul cepat": "Quick modules",
  "Akses langsung ke area kerja yang sering dipakai": "Direct access to frequently used work areas",
  "Semua modul →": "All modules →",
  "Ketersediaan bed": "Bed availability",
  "Live census seluruh bangsal": "Live census across all wards",
  "3 peluang koding ditemukan sebelum pengajuan.": "3 coding opportunities found before submission.",
  "Evidence klinis dan dokumen sudah dipetakan ke klaim. Empat temuan dokumentasi dapat diselesaikan hari ini.": "Clinical and document evidence is linked to claims. Four documentation findings can be resolved today.",
  "potensi tarif": "potential tariff",
  "OCR antrean": "OCR queue",
  "Buka intelligence review": "Open intelligence review",
  "Sinyal lintas unit": "Cross-unit signals",
  "2 hasil lab kritis menunggu validasi": "2 critical lab results awaiting validation",
  "Laboratorium · 12 menit lalu": "Laboratory · 12 minutes ago",
  "Meropenem di bawah stok minimum": "Meropenem below minimum stock",
  "Farmasi · 34 dari 40 vial": "Pharmacy · 34 of 40 vials",
  "Otorisasi Allianz menunggu dokumen": "Allianz authorization awaiting documents",
  "Asuransi & TPA · AUTH-8809": "Insurance & TPA · AUTH-8809",
  "Total master pasien": "Total patient records",
  "Kunjungan hari ini": "Visits today",
  "248 pasien": "248 patients",
  "RJ · RI · IGD · MCU": "Outpatient · Inpatient · Emergency · Check-up",
  "Pasien BPJS": "BPJS patients",
  "JKN aktif": "Active JKN",
  "2 identitas": "2 identities",
  "NIK atau penjamin": "National ID or insurer",
  "Semua jenis layanan": "All service types",
  "No. RM": "Medical record no.",
  "Tidak ada pasien yang cocok.": "No matching patients.",
  "Ubah kata kunci atau filter layanan.": "Change the keyword or service filter.",
  "Identitas & penjamin": "Identity & insurer",
  "Tanggal lahir": "Date of birth",
  "Kontak": "Contact",
  "Alergi": "Allergies",
  "Episode aktif": "Active encounter",
  "Rekam medis elektronik": "Electronic medical record",
  "Catatan medical scribe": "Medical scribe notes",
  "Dokumentasi terbaru": "Recent documentation",
  "Jejak lintas modul": "Cross-module trail",
  "Mulai kunjungan": "Start encounter",
  "Buat tagihan": "Create bill",
  "Dokumentasi klinis dengan speech-to-text atau transkrip manual.": "Clinical documentation with speech-to-text or a manual transcript.",
  "Siap merekam": "Ready to record",
  "Web Speech API · pemrosesan browser": "Web Speech API · browser processing",
  "Human review wajib": "Human review required",
  "Dokter memvalidasi sebelum simpan ke RM": "Physician validates before saving to the medical record",
  "Gunakan contoh": "Use example",
  "Mulai rekam": "Start recording",
  "Simpan ke RM": "Save to medical record",
  "dibanding kemarin": "compared with yesterday",
  "Tepat waktu": "On time",
  "Antrean poliklinik": "Outpatient queue",
  "Klik kartu untuk melihat pasien atau tombol untuk memajukan status": "Click a card to view a patient or use the button to advance status",
  "Alur selesai": "Workflow complete",
  "Belum ada pasien.": "No patients yet.",
  "Jadwal DPJP": "Physician schedules",
  "Praktik hari ini": "Practicing today",
  "6 spesialis": "6 specialists",
  "Alur pasien": "Patient flow",
  "Estimasi waktu tunggu": "Estimated wait time",
  "Kepatuhan waktu layanan berdasarkan registrasi hingga selesai konsultasi.": "Care time compliance from registration through the end of consultation.",
  "Klik bed untuk melihat detail atau mengubah status": "Click a bed to view details or change its status",
  "Pasien rawat inap": "Inpatients",
  "Pasien aktif dan discharge planning": "Active patients and discharge planning",
  "Utilisasi per bangsal": "Utilization by ward",
  "Kapasitas dan occupancy": "Capacity and occupancy",
  "4 pasien diperkirakan pulang hari ini. Koordinasikan billing dan farmasi pasca rawat.": "Four patients are expected to be discharged today. Coordinate billing and pharmacy after care.",
  "Status bed": "Bed status",
  "Bangsal": "Ward",
  "Kelas": "Class",
  "Hak kelas": "Eligible class",
  "Riwayat bed": "Bed history",
  "Perubahan terakhir oleh Housekeeping.": "Last changed by Housekeeping.",
  "Audit inventaris": "Inventory audit",
  "Occupancy disinkronkan dengan census elektronik.": "Occupancy is synchronized with the electronic census.",
  "Proses pulang": "Process discharge",
  "Selesai cleaning": "Cleaning complete",
  "Assign pasien": "Assign patient",
  "Selesai maintenance": "Maintenance complete",
  "High acuity": "High acuity",
  "Triage board": "Triage board",
  "Alur pasien dari kedatangan sampai selesai. Klik kartu untuk detail.": "Patient flow from arrival through completion. Click a card for details.",
  "Prioritas klinis tertinggi": "Highest clinical priority",
  "Pantau tanda vital dan intervensi": "Monitor vital signs and interventions",
  "Nyeri dada kiri, keringat dingin. ECG 12-lead dan troponin sedang diproses.": "Left-sided chest pain and cold sweats. A 12-lead ECG and troponin test are in progress.",
  "Buka catatan klinis": "Open clinical notes",
  "Kapasitas & eskalasi": "Capacity & escalation",
  "Sumber daya IGD saat ini": "Current emergency department resources",
  "P1 membutuhkan cath lab": "P1 needs a cath lab",
  "Pasien IGD-221 menunggu konfirmasi tim intervensi jantung.": "Patient IGD-221 awaits confirmation from the cardiac intervention team.",
  "Tanda vital": "Vital signs",
  "Tekanan darah": "Blood pressure",
  "Pernapasan": "Respiratory rate",
  "Keluhan & triage": "Symptoms & triage",
  "Keluhan utama": "Chief complaint",
  "Timeline IGD": "Emergency timeline",
  "Pasien tiba": "Patient arrived",
  "Registrasi IGD dan triage awal.": "Emergency registration and initial triage.",
  "Assessment awal": "Initial assessment",
  "Intervensi": "Intervention",
  "Sedang berjalan": "In progress",
  "Order diagnostik dan monitoring klinis.": "Diagnostic orders and clinical monitoring.",
  "Majukan status": "Advance status",
  "Perencanaan tindakan": "Procedure planning",
  "Daftar semua jadwal dan kesiapan berkas": "All schedules and document readiness",
  "Ekspor jadwal": "Export schedule",
  "Pasien / Prosedur": "Patient / Procedure",
  "Ringkasan tindakan": "Procedure summary",
  "Checklist keselamatan": "Safety checklist",
  "Identitas pasien & prosedur": "Patient and procedure identity",
  "Terverifikasi oleh perawat sirkuler": "Verified by circulating nurse",
  "Informed consent": "Informed consent",
  "TTE tersimpan": "Electronic signature saved",
  "Site marking": "Site marking",
  "Menunggu konfirmasi operator": "Awaiting surgeon confirmation",
  "Jadwal dibuat": "Schedule created",
  "Persiapan kamar": "Room preparation",
  "Klik resep untuk memeriksa item dan interaksi": "Click a prescription to review items and interactions",
  "4 prioritas": "4 priority items",
  "3 siap": "3 ready",
  "Resep / Pasien": "Prescription / Patient",
  "Stok perlu perhatian": "Stock needs attention",
  "Berdasarkan batas minimum": "Based on minimum threshold",
  "Semua stok →": "All stock →",
  "Kontrol farmasi": "Pharmacy controls",
  "Safety check hari ini": "Today's safety checks",
  "Meropenem di bawah minimum": "Meropenem below minimum",
  "Buat PO atau redistribusi dari gudang cabang sebelum stok habis.": "Create a purchase order or redistribute from another warehouse before stock runs out.",
  "Buat PO": "Create purchase order",
  "Item resep": "Prescription item",
  "Jml": "Qty",
  "Aturan pakai": "Directions",
  "1× pagi": "Once each morning",
  "Alergi pasien diverifikasi": "Patient allergies verified",
  "Penisilin · tidak ada konflik": "Penicillin · no conflict",
  "Interaksi ringan terdeteksi": "Mild interaction detected",
  "Pantau elektrolit dan fungsi ginjal": "Monitor electrolytes and kidney function",
  "Status dispensing": "Dispensing status",
  "Resep diterima": "Prescription received",
  "Verifikasi apoteker": "Pharmacist verification",
  "Dosis dan rute sesuai order DPJP.": "Dose and route match the physician's order.",
  "Worklist specimen": "Specimen worklist",
  "Klik order untuk melihat detail dan hasil": "Click an order to view details and results",
  "Interface analyzer aktif": "Analyzer interface active",
  "Critical values": "Critical values",
  "Memerlukan komunikasi ke DPJP": "Requires physician notification",
  "Kapasitas lab": "Lab capacity",
  "Beban analyzer saat ini": "Current analyzer workload",
  "Status alur": "Workflow status",
  "Order diterima": "Order received",
  "Order dari DPJP tersambung ke kunjungan.": "The physician's order is linked to the encounter.",
  "Specimen diterima": "Specimen received",
  "Barcode diverifikasi oleh petugas lab.": "Lab staff verified the barcode.",
  "Worklist imaging": "Imaging worklist",
  "Klik order untuk membuka studi dan laporan": "Click an order to open the study and report",
  "PACS connected": "PACS connected",
  "Pasien / Pemeriksaan": "Patient / Examination",
  "Utilisasi modality": "Modality utilization",
  "Kualitas & safety": "Quality & safety",
  "Checklist radiologi": "Radiology checklist",
  "Dosis radiasi tercatat": "Radiation dose recorded",
  "Semua CT hari ini": "All CT scans today",
  "Identitas & site verification": "Identity & site verification",
  "100% compliance": "100% compliance",
  "3 laporan belum ditandatangani": "3 unsigned reports",
  "Menunggu radiolog": "Awaiting radiologist",
  "Preview studi": "Study preview"
});
Object.assign(translations,{
  "Preview demo. Viewer PACS penuh tersedia melalui integrasi.": "Demo preview. The full PACS viewer is available through integration.",
  "Laporan radiologi": "Radiology report",
  "Temuan / ekspertise": "Findings / report",
  "Simpan laporan": "Save report",
  "Order diet": "Diet order",
  "Klik order untuk melihat diet dan riwayat": "Click an order to view the diet and history",
  "Ringkasan dapur": "Kitchen overview",
  "Produksi hari ini": "Today's production",
  "Catatan alergi": "Allergy notes",
  "Harus diverifikasi sebelum distribusi": "Must be verified before distribution",
  "Diet jantung · double check obat": "Cardiac diet · double-check medication",
  "Diet pasca persalinan": "Postpartum diet",
  "Diet pasca operasi": "Postoperative diet",
  "Rencana asuhan gizi": "Nutrition care plan",
  "Frekuensi": "Frequency",
  "3× makan utama": "3 main meals",
  "Catatan gizi": "Nutrition notes",
  "Skrining risiko malnutrisi": "Malnutrition risk screening",
  "Pasien memerlukan evaluasi asupan harian dan monitoring berat badan.": "The patient needs daily intake assessment and weight monitoring.",
  "Distribusi": "Distribution",
  "Order diterima dapur": "Order received by kitchen",
  "Verifikasi alergi": "Allergy verification",
  "Paket MCU": "Health check-up package",
  "Daftarkan peserta": "Register participant",
  "Peserta MCU": "Health check-up participants",
  "Klik peserta untuk melihat progres pemeriksaan": "Click a participant to view examination progress",
  "3 korporat": "3 corporate participants",
  "Peserta": "Participant",
  "Progres pemeriksaan": "Examination progress",
  "Ringkasan klinis": "Clinical summary",
  "Gula darah": "Blood glucose",
  "Status akhir": "Final status",
  "Majukan progres": "Advance progress",
  "Daftar invoice": "Invoice list",
  "Klik invoice untuk melihat rincian tagihan": "Click an invoice to view bill details",
  "Invoice / Pasien": "Invoice / Patient",
  "Jatuh tempo": "Due date",
  "Rincian layanan": "Service details",
  "Kamar & akomodasi": "Room & accommodation",
  "Tindakan & jasa medis": "Procedures & medical fees",
  "Lab, radiologi & obat": "Lab, radiology & medication",
  "Administrasi": "Administration",
  "Terbayar": "Paid",
  "Audit pembayaran": "Payment audit",
  "Invoice dibuat": "Invoice created",
  "Dari encounter dan order layanan.": "From encounter and service orders.",
  "Update terakhir": "Last update",
  "Catat pembayaran": "Record payment",
  "Cetak kuitansi": "Print receipt",
  "Claim workspace": "Claims workspace",
  "Klik klaim untuk meninjau evidence, temuan, dan rekomendasi kode": "Click a claim to review evidence, findings, and coding recommendations",
  "Semua penjamin": "All insurers",
  "Antrean verifikasi": "Verification queue",
  "Temuan sebelum submission": "Findings before submission",
  "Distribusi pending": "Pending claim distribution",
  "Penyebab utama dari 214 berkas": "Main causes across 214 files",
  "OCR tersambung ke 7 klaim": "OCR linked to 7 claims",
  "Evidence dokumen tersedia untuk verifier dan coding AI.": "Document evidence is available to the verifier and coding AI.",
  "Nilai iDRG": "iDRG value",
  "Pre-submission verifier": "Pre-submission verifier",
  "SEP & eligibilitas valid": "SEP & eligibility valid",
  "Terhubung ke VClaim": "Connected to VClaim",
  "Peluang koding": "Coding opportunity",
  "Terima saran": "Accept suggestion",
  "Abaikan": "Dismiss",
  "Timeline klaim": "Claim timeline",
  "Encounter selesai": "Encounter complete",
  "Data layanan diteruskan ke claim workspace.": "Care data forwarded to the claims workspace.",
  "Verifier dijalankan": "Verifier run",
  "Lihat evidence OCR": "View OCR evidence",
  "Tandai siap": "Mark ready",
  "Unggah dokumen": "Upload document",
  "OCR gambar berjalan di browser; PDF dan gambar dapat diunggah": "Image OCR runs in the browser; PDFs and images can be uploaded",
  "Drop dokumen di sini.": "Drop documents here.",
  "Resume medis, SEP, hasil lab, invoice, atau dokumen pendukung klaim. Maks. 10 MB per file.": "Medical summaries, SEP, lab results, invoices, or supporting claim documents. Maximum 10 MB per file.",
  "Pilih file": "Choose file",
  "Gambar diproses dengan OCR browser; PDF empat halaman pertama diekstrak dengan PDF.js dan OCR untuk scan. File tetap berada di browser.": "Images are processed with browser OCR; the first four PDF pages are extracted with PDF.js and OCR for scans. Files remain in the browser.",
  "Antrean dokumen": "Document queue",
  "Klik dokumen untuk membuka hasil ekstraksi": "Click a document to open extraction results",
  "Hasil ekstraksi": "Extraction results",
  "Field dapat dikoreksi sebelum diteruskan": "Fields can be corrected before forwarding",
  "RESUME MEDIS RAWAT INAP": "INPATIENT MEDICAL SUMMARY",
  "Nama:": "Name:",
  "Diagnosis:": "Diagnosis:",
  "Nama pasien": "Patient name",
  "Simpan koreksi": "Save corrections",
  "Validasi & kirim": "Validate & send",
  "Belum ada dokumen dipilih.": "No document selected.",
  "Unggah file atau gunakan contoh untuk memulai.": "Upload a file or use an example to begin.",
  "Kontrol ekstraksi": "Extraction controls",
  "Kualitas dan provenance": "Quality and provenance",
  "Pencocokan identitas": "Identity matching",
  "RM dan nama pasien cocok": "Medical record number and patient name match",
  "Field total tagihan": "Total bill field",
  "Perlu verifikasi koder": "Needs coder verification",
  "Provenance tersimpan": "Provenance saved",
  "Nama file, halaman, confidence": "File name, page, confidence",
  "Otorisasi & benefit": "Authorizations & benefits",
  "Klik pengajuan untuk memeriksa benefit dan dokumen": "Click a submission to review benefits and documents",
  "Kelengkapan dokumen": "Document completeness",
  "Sebelum dikirim ke penjamin": "Before sending to the insurer",
  "Surat eligibilitas": "Eligibility letter",
  "Laporan operasi": "Operation report",
  "Resume medis & kode": "Medical summary & codes",
  "Evidence OCR tersedia": "OCR evidence available",
  "Benefit rule check": "Benefit rule check",
  "Validasi otomatis": "Automatic validation",
  "Benefit & coverage": "Benefits & coverage",
  "Aktif · 22 Okt 2026": "Active · 22 Oct 2026",
  "Pemeriksaan aturan": "Rule checks",
  "Polis aktif": "Active policy",
  "Nomor polis terverifikasi": "Policy number verified",
  "Diagnosis covered": "Diagnosis covered",
  "Sesuai benefit jaminan": "Within covered benefits",
  "Dokumen pendukung": "Supporting documents",
  "Pendapatan per layanan": "Revenue by service",
  "Juta rupiah · 7 hari terakhir": "Million rupiah · last 7 days",
  "Asuransi / umum": "Insurance / self-pay",
  "Aging piutang": "Receivables aging",
  "Berdasarkan umur tagihan": "Based on bill age",
  "Bauran penjamin": "Payer mix",
  "Kontribusi pendapatan": "Revenue contribution",
  "TPA / korporat": "TPA / corporate",
  "Ringkasan penjamin": "Insurer overview",
  "Outstanding dan collection": "Outstanding and collected amounts",
  "Kelola penjamin →": "Manage insurers →",
  "Persediaan": "Inventory",
  "Klik item untuk menyesuaikan stok atau membuat PO": "Click an item to adjust stock or create a purchase order",
  "Kategori": "Category",
  "Min.": "Min.",
  "Purchase order": "Purchase order",
  "Draft dan approval": "Draft and approval",
  "8 kit · menunggu approval": "8 kits · awaiting approval",
  "12 botol · stok kritis": "12 bottles · critical stock",
  "Penerimaan hari ini": "Today's receipts",
  "Reorder rule": "Reorder rule",
  "Otomatisasi minimum stock": "Minimum stock automation",
  "Status stok": "Stock status",
  "Stok saat ini": "Current stock",
  "Minimum": "Minimum",
  "Penyesuaian stok": "Stock adjustment",
  "Jumlah masuk / keluar": "Quantity in / out",
  "Demo akan mengubah stok dan menulis audit log.": "The demo will adjust stock and write an audit log entry.",
  "Kurangi stok": "Reduce stock",
  "Tambah stok": "Add stock",
  "Direktori staf": "Staff directory",
  "Klik staf untuk melihat profil dan kompetensi": "Click a staff member to view profile and competencies",
  "262 hadir": "262 present",
  "Kepatuhan": "Compliance",
  "Payroll cycle": "Payroll cycle",
  "Potongan & pajak": "Deductions & tax",
  "284 staf": "284 staff",
  "Review & jalankan payroll": "Review & run payroll",
  "Absensi hari ini": "Today's attendance",
  "Per shift": "By shift",
  "Pagi · 198 staf": "Morning · 198 staff",
  "192 hadir · 6 terlambat": "192 present · 6 late",
  "Sore · 58 staf": "Afternoon · 58 staff",
  "48 hadir · 10 belum": "48 present · 10 not yet checked in",
  "Malam · 28 staf": "Evening · 28 staff",
  "Check-in mulai 20.00": "Check-in starts at 20:00",
  "Profil & penempatan": "Profile & placement",
  "Status hari ini": "Today's status",
  "Kompetensi": "Competencies",
  "Credential aktif": "Active credential",
  "STRA / STR · berlaku sampai 2027": "STRA / STR · valid until 2027",
  "Training berikutnya": "Next training",
  "BLS refresh · 14 Nov 2026": "BLS refresher · 14 Nov 2026",
  "Absensi minggu ini": "This week's attendance",
  "Event terbaru": "Recent events",
  "Audit integrasi": "Integration audit",
  "Encounter FHIR berhasil": "FHIR encounter succeeded",
  "18 resource · 2 menit lalu": "18 resources · 2 minutes ago",
  "SEP tersinkron": "SEP synchronized",
  "5 menit lalu": "5 minutes ago",
  "Claim submission": "Claim submission",
  "12 menit lalu": "12 minutes ago",
  "E-Klaim · 4 klaim, 4 sukses": "E-Claim · 4 claims, 4 succeeded",
  "Aplicare menunggu konfigurasi": "Aplicare awaits configuration",
  "1 jam lalu": "1 hour ago",
  "Bed availability endpoint": "Bed availability endpoint",
  "Trend layanan": "Care trends",
  "Harian": "Daily",
  "Mingguan": "Weekly",
  "Bauran layanan": "Service mix",
  "Kontribusi kunjungan": "Visit contribution",
  "Kualitas layanan": "Care quality",
  "Indikator utama": "Key indicators",
  "Analitik klaim": "Claim analytics",
  "Penyebab pending": "Pending causes",
  "Unit dengan volume tertinggi": "Units with highest volume",
  "Jejak aktivitas lintas modul": "Cross-module activity trail",
  "Akses per role": "Access by role",
  "Klinis": "Clinical",
  "Kontrol keamanan": "Security controls",
  "Status konfigurasi": "Configuration status",
  "MFA untuk role admin": "MFA for admin roles",
  "Aktif untuk 12 akun": "Active for 12 accounts",
  "Session timeout": "Session timeout",
  "15 menit idle": "15 minutes idle",
  "2 akun belum MFA": "2 accounts without MFA",
  "Perlu eskalasi admin": "Requires admin escalation",
  "Pilih pasien": "Select patient",
  "Nama lengkap": "Full name",
  "Jenis kelamin": "Gender",
  "Nomor telepon": "Phone number",
  "Jenis layanan": "Service type",
  "Unit / poliklinik": "Unit / outpatient clinic",
  "Catatan / alergi": "Notes / allergies",
  "Registrasi demo akan membuat No. RM otomatis dan menambahkan pasien ke master.": "Demo registration will generate a medical record number and add the patient to the master list.",
  "Simpan & daftarkan": "Save & register",
  "Darah lengkap": "Complete blood count",
  "Fungsi ginjal": "Kidney function",
  "Fungsi hati": "Liver function",
  "Foto toraks PA": "PA chest X-ray",
  "CT kepala non-kontras": "Non-contrast head CT",
  "CT toraks": "Chest CT",
  "USG abdomen": "Abdominal ultrasound",
  "USG soft tissue": "Soft tissue ultrasound",
  "Indikasi klinis": "Clinical indication",
  "Jenis diet": "Diet type",
  "Diet biasa": "Regular diet",
  "Diet rendah garam II": "Low-salt diet II",
  "Diet diabetes": "Diabetic diet",
  "Diet tinggi kalori tinggi protein": "High-calorie, high-protein diet",
  "Catatan alergi / konsultasi": "Allergy / consultation notes",
  "Pra-kerja": "Pre-employment",
  "Penanggung jawab": "Owner",
  "Obat & dosis": "Medication & dose",
  "Kirim resep": "Send prescription",
  "Jam mulai": "Start time",
  "Simpan jadwal": "Save schedule",
  "Ajukan otorisasi": "Submit authorization",
  "Diagnosis utama": "Primary diagnosis",
  "SEP / nomor klaim": "SEP / claim number",
  "Buat klaim": "Create claim",
  "Tipe B · Jakarta Timur · aktif": "Type B · East Jakarta · active",
  "Klinik pratama · Jakarta Selatan": "Primary clinic · South Jakarta",
  "Environment demo": "Demo environment",
  "Administrator workspace · RS Medika Nusantara": "Administrator workspace · RS Medika Nusantara",
  "Akses cepat": "Quick access",
  "Lihat aktivitas akun dan perubahan data": "View account activity and data changes",
  "Ganti role dari selector di header untuk mencoba tampilan pengguna lain.": "Change roles with the selector in the header to try another user's view.",
  "Status koneksi": "Connection status",
  "Sinkron terakhir": "Last sync",
  "Konfigurasi": "Configuration",
  "Sinkronkan": "Sync",
  "FHIR endpoint aktif": "FHIR endpoint active",
  "Tes koneksi": "Test connection",
  "Pengguna": "User",
  "Sesi": "Session",
  "Belum": "Not yet",
  "Payroll Oktober 2026": "October 2026 payroll",
  "RS Medika Nusantara · 284 staf": "RS Medika Nusantara · 284 staff",
  "Menjalankan payroll demo akan membuat batch pembayaran dan menulis audit log.": "Running the demo payroll will create a payment batch and write an audit log entry.",
  "Jalankan payroll": "Run payroll",
  "Nama item": "Item name",
  "Cairan": "Fluids",
  "Satuan": "Unit",
  "Stok awal": "Opening stock",
  "Stok minimum": "Minimum stock",
  "Simpan item": "Save item",
  "Menyiapkan batch payroll…": "Preparing payroll batch…"
});
Object.assign(translations,{
  "Anggota polis": "Policy member",
  "Pembaruan terakhir": "Last update",
  "Bagian biaya pasien*": "Patient share of costs*",
  "Asuransi tujuan": "Destination insurer",
  "RS tidak menagih asuransi untuk kasus ini. Pasien mengajukan sendiri; keputusan dan pembayaran kepada pasien tidak dicatat di dashboard RS.": "The hospital does not bill the insurer for this case. The patient submits the claim; insurer decisions and payments to the patient are not recorded in the hospital dashboard.",
  "Yang dibantu AI": "Where AI helps",
  "Berkas yang perlu dicek": "Documents to check",
  "Ditagihkan": "Billed",
  "Acuan manfaat": "Benefits reference",
  "Pemeriksaan dicatat · berkas masih perlu koreksi": "Review recorded · documents still need correction",
  "Pengingat terkirim": "Reminder sent",
  "Dasar saran:": "Basis for suggestion:",
  "Perlu konfirmasi koder & DPJP. Nilai ini ilustratif, bukan pendapatan yang sudah disetujui atau dibayar.": "Coder and physician confirmation is required. This value is illustrative and is neither approved nor paid revenue.",
  "Saran diterima untuk simulasi. Perubahan kode dan nilai klaim tetap harus diverifikasi; belum menjadi pembayaran.": "Suggestion accepted for the simulation. Code and claim value changes still require verification and do not represent payment.",
  "Tandai temuan sudah diperbaiki": "Mark finding as resolved",
  "Setujui dan tandai siap kirim": "Approve and mark ready to submit",
  "Alur penyelesaian": "Resolution workflow",
  "Bukti yang perlu dilampirkan": "Evidence to attach",
  "Draf jawaban": "Response draft",
  "Salin draf": "Copy draft",
  "Draf disusun dari catatan verifikator dan dokumen di rekam medis. Koder meninjau dan melampirkan bukti sebelum diajukan.": "The draft uses verifier notes and medical record documents. The coder reviews it and attaches evidence before submission.",
  "Menunggu verifikasi ulang": "Awaiting reverification",
  "Tarif": "Tariff"
});
Object.assign(translations,{
  "Navigasi dashboard": "Dashboard navigation",
  "Menu utama": "Main menu",
  "Ringkasan menurut penjamin": "Overview by insurer",
  "Pilih metrik": "Select metric",
  "Komposisi nilai klaim per status": "Claim value composition by status",
  "Alur bantuan AI selama perawatan": "AI assistance workflow during care",
  "Cari pasien rawat aktif": "Search active inpatients",
  "Filter risiko KMKB": "Filter KMKB risk",
  "Filter unit KMKB": "Filter KMKB unit",
  "Filter status": "Filter status",
  "Filter unit": "Filter unit",
  "Urutkan": "Sort by",
  "Tahap penjaminan dan bantuan AI": "Coverage stages and AI assistance",
  "Jalur klaim asuransi": "Insurance claims pathway",
  "Tahap klaim cashless dan bantuan AI": "Cashless claims stages and AI assistance",
  "Tahap bantuan berkas reimbursement oleh RS": "Hospital document support stages for reimbursement",
  "Cari klaim asuransi": "Search insurance claims",
  "Filter tahap asuransi": "Filter insurance stage",
  "Filter prioritas": "Filter priority",
  "Cari klaim, pasien, penjamin": "Search claim, patient, or insurer",
  "Navigasi SIMRS": "SIMRS navigation",
  "Kembali ke landing MAXY AI": "Return to MAXY AI landing page",
  "Cari di seluruh SIMRS": "Search all SIMRS",
  "Buka notifikasi": "Open notifications",
  "Buka menu pengguna": "Open user menu",
  "Panel detail": "Details panel",
  "Cari pasien, modul, klaim…": "Search patients, modules, claims…"
});
Object.assign(translations,{
  "Demam berdarah dengue": "Dengue hemorrhagic fever",
  "Penyakit Dalam": "Internal medicine",
  "Trombosit 38.000/µL tercatat pada hasil lab hari ke-2, belum dikode sebagai diagnosis sekunder.": "Platelets of 38,000/µL were recorded on day two but have not been coded as a secondary diagnosis.",
  "Mohon lampirkan hasil trombosit dan hematokrit serial untuk mendukung diagnosis DBD.": "Please attach serial platelet and hematocrit results to support the dengue diagnosis.",
  "Gagal napas akut": "Acute respiratory failure",
  "SpO₂ 86% dan oksigen NRM 10 lpm tercatat di catatan perawat IGD.": "SpO₂ of 86% and oxygen via non-rebreather mask at 10 L/min are recorded in emergency nursing notes.",
  "Lampirkan foto toraks dan ekspertise radiolog sebagai bukti pneumonia.": "Attach the chest X-ray and radiologist report as evidence of pneumonia.",
  "Gagal jantung": "Heart failure",
  "Natrium 126 mmol/L dan koreksi NaCl 3% tercatat, belum dikode.": "Sodium of 126 mmol/L and 3% NaCl correction are documented but not coded.",
  "Lama rawat 9 hari melebihi rata-rata kelompok. Mohon lampirkan justifikasi klinis.": "The nine-day stay exceeds the group average. Please attach clinical justification.",
  "Infark serebral": "Cerebral infarction",
  "Pneumonia aspirasi": "Aspiration pneumonia",
  "Foto toraks hari ke-3 menunjukkan infiltrat baru dan antibiotik IV diberikan.": "The day-three chest X-ray shows a new infiltrate, and IV antibiotics were given.",
  "Lampirkan hasil CT scan kepala untuk konfirmasi diagnosis infark serebral.": "Attach the head CT results to confirm the cerebral infarction diagnosis.",
  "Diabetes melitus tipe 2": "Type 2 diabetes mellitus",
  "DM tipe 2 dengan komplikasi sirkulasi perifer": "Type 2 diabetes with peripheral circulatory complications",
  "Ulkus kaki diabetik dan debridemen tercatat di laporan tindakan; kode utama belum spesifik.": "A diabetic foot ulcer and debridement are recorded in the procedure report; the primary code is not yet specific.",
  "Diagnosis sekunder tidak didukung hasil penunjang. Mohon klarifikasi.": "The secondary diagnosis is not supported by diagnostic results. Please clarify.",
  "Penyakit ginjal kronik stadium 5": "Stage 5 chronic kidney disease",
  "Anemia pada penyakit kronik": "Anemia of chronic disease",
  "Hb 7,2 g/dL dan transfusi PRC 2 kolf tercatat, belum dikode.": "Hemoglobin of 7.2 g/dL and two units of packed red cells are documented but not coded.",
  "Mohon lampirkan bukti tindakan hemodialisis selama rawat inap.": "Please attach evidence of hemodialysis during the inpatient stay.",
  "Persalinan sesar": "Cesarean delivery",
  "Preeklamsia berat": "Severe preeclampsia",
  "TD 170/110 mmHg dan pemberian MgSO₄ tercatat di partograf, belum menjadi diagnosis sekunder.": "Blood pressure of 170/110 mmHg and MgSO₄ administration are documented in the partograph but are not listed as a secondary diagnosis.",
  "Indikasi sesar belum tercantum jelas di laporan operasi. Mohon konfirmasi.": "The indication for cesarean delivery is not clear in the operation report. Please confirm.",
  "Apendisitis akut": "Acute appendicitis",
  "Peritonitis akut": "Acute peritonitis",
  "Laporan operasi mencatat perforasi dengan cairan purulen di rongga abdomen.": "The operation report describes a perforation with purulent fluid in the abdominal cavity.",
  "Laporan operasi dan hasil patologi anatomi belum dilampirkan.": "The operation report and pathology results have not been attached.",
  "Diare dan gastroenteritis": "Diarrhea and gastroenteritis",
  "Dehidrasi berat dan rehidrasi IV tercatat di resume, belum dikode.": "Severe dehydration and IV rehydration are noted in the summary but have not been coded.",
  "Mohon lampirkan catatan balans cairan untuk mendukung derajat dehidrasi.": "Please attach fluid balance notes to support the degree of dehydration.",
  "Bayi prematur": "Premature infant",
  "Mohon lampirkan catatan perawatan perinatologi.": "Please attach perinatal care notes.",
  "PPOK eksaserbasi akut": "Acute COPD exacerbation",
  "Mohon lampirkan hasil analisa gas darah.": "Please attach blood gas results.",
  "Hipertensi esensial": "Essential hypertension",
  "Hasil lab pendukung diagnosis belum terlampir": "Supporting lab results are not attached",
  "Hasil radiologi belum terlampir": "Radiology results are not attached",
  "Resume medis belum ditandatangani DPJP": "The medical summary has not been signed by the physician",
  "Laporan operasi tidak ada di berkas": "The operation report is missing from the file",
  "Rincian tagihan obat tidak sesuai resep": "Medication bill details do not match the prescription",
  "Lama rawat di atas rata-rata kelompok tanpa justifikasi": "Length of stay exceeds the group average without justification",
  "Tanggal SEP tidak sesuai tanggal masuk": "SEP date does not match admission date",
  "Diagnosis utama kurang didukung anamnesis": "Primary diagnosis lacks support from the medical history",
  "Rata-rata hari dari pasien pulang ke pengajuan": "Average days from discharge to submission",
  "Target ≤5 hari dari pasien pulang ke pengajuan.": "Target: no more than five days from discharge to submission.",
  "Tidak layak": "Ineligible",
  "Trombosit 38.000/µL pada hasil lab hari ke-2; resume belum ditandatangani.": "Platelets of 38,000/µL in day-two lab results; the summary has not been signed.",
  "Minta DPJP melengkapi resume dan koder menilai diagnosis sekunder yang didukung bukti.": "Ask the physician to complete the summary and the coder to assess the evidence-supported secondary diagnosis.",
  "Foto toraks dan catatan antibiotik perlu dicocokkan; billing melewati estimasi.": "Chest X-ray and antibiotic notes need reconciliation; billing exceeds the estimate.",
  "Tinjau bukti pneumonia, lama rawat, dan biaya berjalan bersama KMKB.": "Review pneumonia evidence, length of stay, and ongoing costs with KMKB.",
  "Catatan perkembangan belum menjelaskan kebutuhan rawat lebih lama.": "Progress notes do not yet explain the longer stay.",
  "Lengkapi alasan klinis lama rawat dan pantau biaya harian.": "Complete the clinical rationale for the length of stay and monitor daily costs.",
  "CT scan kepala belum dilampirkan pada berkas klaim sementara.": "The head CT has not been attached to the preliminary claim file.",
  "Hubungkan hasil CT scan ke rekam medis dan tinjau diagnosis dengan verifikator.": "Link the head CT results to the medical record and review the diagnosis with the verifier.",
  "Laporan tindakan debridemen dan catatan ulkus perlu dicocokkan dengan kode.": "The debridement report and ulcer notes need to be matched against the code.",
  "Koder menilai kecocokan kode dengan laporan tindakan.": "The coder checks the code against the procedure report.",
  "Hasil ureum, kreatinin, dan eGFR belum terhubung ke berkas sementara.": "Urea, creatinine, and eGFR results have not been linked to the preliminary file.",
  "Tautkan penunjang dan catatan hemodialisis.": "Link diagnostic results and hemodialysis notes.",
  "Indikasi sesar pada laporan operasi perlu diperjelas.": "The cesarean indication in the operation report needs clarification.",
  "Lengkapi laporan operasi dan indikasi tindakan.": "Complete the operation report and procedure indication.",
  "Laporan operasi belum muncul pada lampiran yang tersinkron.": "The operation report is missing from the synchronized attachments.",
  "Periksa laporan operasi dan hasil penunjang.": "Review the operation report and diagnostic results.",
  "Catatan cairan dan elektrolit tersedia untuk ditinjau.": "Fluid and electrolyte notes are available for review.",
  "Lanjutkan pemantauan sampai pasien pulang.": "Continue monitoring until discharge.",
  "Catatan perawatan inkubator telah tersinkron.": "Incubator care notes have been synchronized.",
  "Pantau biaya dan kelengkapan berkas perinatologi.": "Monitor costs and the completeness of perinatal records."
});
Object.assign(translations,{
  "Verifikator mengusulkan perubahan diagnosis utama; RS belum sepakat.": "The verifier proposed changing the primary diagnosis; the hospital has not agreed.",
  "Rawat inap · demam berdarah": "Inpatient · dengue fever",
  "Membandingkan data peserta dan rencana kamar dengan ringkasan manfaat yang diunggah; menandai bagian polis yang perlu dicek admisi.": "Compares member data and planned room class with the uploaded benefits summary; flags policy terms for admissions to check.",
  "Manfaat rawat inap dan kelas kamar perlu dikonfirmasi": "Inpatient benefits and room class need confirmation",
  "Data peserta dan ringkasan ketentuan polis belum dicocokkan dengan kelas perawatan.": "Member data and policy terms have not been matched with the care class.",
  "Cocokkan peserta, manfaat, batas kamar, dan masa tunggu sesuai polis sebelum pengajuan penjaminan awal.": "Check member details, benefits, room limits, and waiting periods against the policy before requesting initial coverage.",
  "Rawat inap · pneumonia": "Inpatient · pneumonia",
  "Mendeteksi belum adanya respons penjaminan awal dan mengingatkan admisi untuk menindaklanjuti permintaan.": "Detects a missing initial coverage response and reminds admissions to follow up.",
  "Surat penjaminan awal belum diterima": "Initial guarantee letter not received",
  "Permintaan penjaminan awal sudah dicatat; respons penjamin belum tersedia di berkas demo.": "The initial coverage request was recorded, but the insurer's response is not in the demo file.",
  "Hubungi penjamin atau TPA dan catat nomor serta status surat penjaminan awal.": "Contact the insurer or TPA and record the initial guarantee letter number and status.",
  "Rawat inap · infeksi saluran napas": "Inpatient · respiratory infection",
  "Mencocokkan item obat pada tagihan dengan keputusan akhir penjamin, lalu menghitung selisih untuk ditinjau billing.": "Matches medication charges against the insurer's final decision, then calculates the difference for billing review.",
  "Batas manfaat obat khusus terlampaui Rp 4,4 jt": "Special medication benefit limit exceeded by Rp 4.4 million",
  "Tagihan obat khusus Rp 6,4 jt; keputusan penjamin contoh menanggung Rp 2 jt dan mencatat Rp 4,4 jt sebagai bagian pasien.": "Special medication charges total Rp 6.4 million; the sample insurer decision covers Rp 2 million and assigns Rp 4.4 million to the patient.",
  "Cocokkan rincian obat dengan keputusan penjamin, lalu jelaskan bagian biaya pasien sebelum penagihan.": "Match medication details to the insurer decision and explain the patient's share before billing.",
  "Rawat inap · batu empedu": "Inpatient · gallstones",
  "Memeriksa daftar lampiran dan menandai resume medis final yang belum tersedia.": "Checks the attachment list and flags the missing final medical summary.",
  "Resume medis final belum terlampir": "Final medical summary not attached",
  "Berkas pulang tersedia, tetapi resume bertanda tangan belum terdeteksi pada lampiran demo.": "Discharge documents are available, but a signed medical summary is missing from the demo attachments.",
  "Minta DPJP meninjau dan melengkapi resume sebelum penjaminan akhir.": "Ask the physician to review and complete the summary before final coverage approval.",
  "Rawat inap · apendisitis": "Inpatient · appendicitis",
  "Mengingatkan piutang yang sudah disetujui tetapi belum memiliki pasangan transaksi pembayaran.": "Flags an approved receivable that has no matching payment transaction.",
  "Klaim disetujui, pembayaran belum tercatat": "Claim approved, payment not recorded",
  "Nilai disetujui Rp 14,6 jt pada keputusan penjamin; mutasi pembayaran belum cocok.": "The insurer approved Rp 14.6 million; payment records do not yet match.",
  "Cocokkan nomor klaim dan tanggal jatuh bayar dengan buku piutang dan mutasi bank.": "Match the claim number and payment due date to receivables and bank transactions.",
  "Rawat inap · diabetes melitus": "Inpatient · diabetes mellitus",
  "Mencocokkan keputusan penjamin dan kas masuk; menandai selisih Rp 2 jt untuk ditelusuri keuangan.": "Compares the insurer decision with cash received and flags a Rp 2 million difference for finance to investigate.",
  "Pembayaran kurang Rp 2 jt dari nilai disetujui": "Payment is Rp 2 million below the approved amount",
  "Keputusan penjamin Rp 10 jt; pembayaran yang dicatat Rp 8 jt.": "The insurer approved Rp 10 million; Rp 8 million was recorded as paid.",
  "Telusuri potongan atau pembayaran bertahap sebelum menutup piutang.": "Investigate deductions or installment payments before closing the receivable.",
  "Rawat inap · tifoid": "Inpatient · typhoid fever",
  "Mencocokkan nilai yang disetujui dengan pembayaran RS dan menandai kasus siap diarsipkan.": "Matches the approved amount to hospital payment and marks the case ready to archive.",
  "Pembayaran penjamin sudah cocok": "Insurer payment reconciled",
  "Penjamin menyetujui dan membayar Rp 7,2 jt; Rp 0,4 jt pada contoh merupakan bagian pasien dan status pelunasannya belum dicatat.": "The insurer approved and paid Rp 7.2 million; the sample's Rp 0.4 million patient share has no recorded settlement status.",
  "Arsipkan berkas dan bukti rekonsiliasi.": "Archive the documents and reconciliation evidence.",
  "Rawat jalan · pemeriksaan ortopedi": "Outpatient · orthopedic examination",
  "Mencocokkan kuitansi lunas Rp 3,8 jt, rincian biaya, dan resume medis; berkas contoh sudah sesuai.": "Matches a paid receipt of Rp 3.8 million with cost details and the medical summary; the sample documents match.",
  "Berkas siap diberikan kepada pasien": "Documents ready to give to the patient",
  "Kuitansi lunas Rp 3,8 jt sesuai rincian biaya dan resume medis tersedia.": "The paid receipt of Rp 3.8 million matches the cost details, and the medical summary is available.",
  "Berikan kuitansi, rincian biaya, dan resume medis kepada pasien untuk diajukan sendiri ke Prudential Indonesia.": "Give the receipt, cost details, and medical summary to the patient for direct submission to Prudential Indonesia.",
  "Rawat inap · gastroenteritis": "Inpatient · gastroenteritis",
  "Membandingkan kelas kamar yang dipilih dengan ringkasan manfaat contoh; admisi mengonfirmasi selisih ke penjamin.": "Compares the chosen room class with sample benefits; admissions confirms the difference with the insurer.",
  "Kelas kamar melebihi manfaat pada ringkasan polis": "Room class exceeds the policy benefits summary",
  "Kelas yang dipesan belum sesuai dengan batas kamar pada data manfaat contoh.": "The booked room class exceeds the limit in the sample benefits data.",
  "Konfirmasi pilihan kamar dan kemungkinan selisih pasien sebelum rawat.": "Confirm the room choice and potential patient share before admission.",
  "Rawat inap · tindakan artroskopi": "Inpatient · arthroscopy",
  "Menandai tindakan terjadwal dengan estimasi biaya tinggi dan belum adanya keputusan penjaminan awal.": "Flags a scheduled, high-cost procedure without an initial insurer decision.",
  "Tindakan berbiaya tinggi menunggu persetujuan awal": "High-cost procedure awaiting initial approval",
  "Rencana tindakan tercatat; respons penjamin untuk tindakan tersebut belum ada.": "The procedure plan is recorded, but there is no insurer response yet.",
  "Lampirkan indikasi klinis dan minta keputusan penjamin sebelum tindakan terjadwal.": "Attach the clinical indication and request an insurer decision before the scheduled procedure.",
  "Rawat inap · infeksi saluran kemih": "Inpatient · urinary tract infection",
  "Memantau perubahan diagnosis dan tindakan terhadap berkas awal; memberi peringatan bila dokumen perlu diperbarui.": "Monitors diagnosis and procedure changes against the initial file and warns when documents need updating.",
  "Penjaminan awal sudah tercatat": "Initial coverage recorded",
  "Nomor surat penjaminan awal tersedia pada berkas demo.": "The initial guarantee letter number is in the demo file.",
  "Pantau perubahan layanan sampai penjaminan akhir.": "Track care changes through final coverage approval.",
  "Rawat jalan · konsultasi kardiologi": "Outpatient · cardiology consultation",
  "Membandingkan kuitansi lunas Rp 4,6 jt dengan rincian biaya Rp 4,4 jt dan menandai selisih Rp 200 rb untuk tim billing.": "Compares a paid receipt of Rp 4.6 million with Rp 4.4 million in cost details and flags the Rp 200,000 difference for billing.",
  "Kuitansi dan rincian biaya berbeda Rp 200 rb": "Receipt and cost details differ by Rp 200,000",
  "Kuitansi lunas Rp 4,6 jt; jumlah item pada rincian biaya Rp 4,4 jt. Selisih Rp 200 rb pada data contoh perlu ditelusuri.": "The paid receipt is Rp 4.6 million, while itemized costs total Rp 4.4 million. The Rp 200,000 sample difference needs investigation.",
  "Cocokkan transaksi dan terbitkan dokumen koreksi yang sesuai sebelum berkas diberikan kepada pasien.": "Reconcile the transaction and issue corrected documents before handing them to the patient."
});
Object.assign(translations,{
  "Bantuan RS": "Hospital assistance",
  "Analisis": "Analysis",
  "Penisilin · Ny. Dewi Puspita": "Penicillin · Ms. Dewi Puspita",
  "Lateks · Ny. Melati Handayani": "Latex · Ms. Melati Handayani",
  "Kuartal": "Quarterly",
  "Tren": "Trend",
  "Aktor": "Actor",
  "Prinsip least privilege": "Least privilege principle",
  "Bedah": "Surgery",
  "Rutin": "Routine",
  "Prosedur": "Procedure",
  "Post appendektomi": "Post-appendectomy",
  "Post partum": "Postpartum",
  "Stroke iskemik": "Ischemic stroke",
  "Luka robek lengan kanan": "Right arm laceration",
  "Apendektomi laparoskopi": "Laparoscopic appendectomy",
  "Bronkoskopi diagnostik": "Diagnostic bronchoscopy",
  "Nebulisasi salbutamol · Prednison 5 mg": "Salbutamol nebulization · Prednisone 5 mg",
  "Parasetamol IV · Diazepam PRN": "IV paracetamol · Diazepam as needed",
  "ASI eksklusif · observasi": "Exclusive breastfeeding · observation",
  "NGT enteral bertahap": "Gradual enteral feeding via nasogastric tube",
  "I10 Hipertensi esensial": "I10 Essential hypertension",
  "ICU & CT kepala": "ICU & head CT",
  "Furosemide injeksi 20 mg/2 mL": "Furosemide injection 20 mg/2 mL",
  "Sarung tangan nitril M": "Nitrile gloves M",
  "Infusion set dewasa": "Adult infusion set",
  "Kateter urin 16 Fr": "Urinary catheter 16 Fr",
  "Tabung EDTA 3 mL": "EDTA tube 3 mL",
  "Analis Lab": "Lab analyst",
  "Kemenkes RI": "Indonesian Ministry of Health",
  "Sinkronisasi SATUSEHAT berhasil": "SATUSEHAT synchronization succeeded",
  "Mendeteksi identitas…": "Detecting identity…",
  "Mendeteksi diagnosis…": "Detecting diagnosis…",
  "dinonaktifkan.": "disabled."
});

Object.assign(translations,{
  "Kodefikasi diagnosis & tindakan": "Diagnosis and procedure coding",
  "Kelengkapan penunjang medis": "Diagnostic documentation completeness",
  "Kodefikasi diagnosis": "Diagnosis coding",
  "Kelengkapan penunjang": "Diagnostic documentation",
  "Rincian tagihan": "Itemized billing",
  "Administrasi SEP": "SEP administration",
  "Koding": "Coding",
  "Koding (lama rawat)": "Coding (length of stay)",
  "Penunjang medis": "Diagnostic documentation",
  "Dokumentasi": "Documentation",
  "Gagal jantung": "Heart failure",
  "Infark serebral": "Cerebral infarction",
  "Pneumonia": "Pneumonia",
  "Persalinan sesar": "Cesarean delivery",
  "Demam berdarah dengue": "Dengue hemorrhagic fever",
  "Apendisitis akut": "Acute appendicitis"
});
Object.assign(translations,{
  "Belum ditentukan": "Not assigned",
  "Catatan perawatan inkubator": "Incubator care notes",
  "Daftarkan peserta ke paket pemeriksaan kesehatan.": "Register participants for health screening packages.",
  "Data klaim dan dokumen contoh dimasukkan ke ruang kerja.": "Claim records and supporting documents are added to the workspace.",
  "Jadwal tindakan, kesiapan tim, dan status ruang operasi beserta dokumentasi intraoperatif.": "Surgery schedules, team readiness, operating room status, and intraoperative documentation.",
  "Paket MCU korporat, antrean peserta, progres pemeriksaan, dan laporan kesehatan digital.": "Corporate health screening packages, participant queues, examination progress, and digital health reports.",
  "Screening komprehensif, cardiac workup, dan follow-up kesehatan.": "Comprehensive screening, cardiac workups, and health follow-up.",
  "selesai diproses.": "finished processing.",
  "Diproses": "Processing",
  "Ruang isolasi": "Isolation room",
  "antrian": "queue",
  "Ekspor": "Export",
  "Ekspor CSV": "Export CSV",
  "Ekspor SDM": "Export staff data",
  "Ekspor antrean": "Export queue",
  "Ekspor audit": "Export audit log",
  "Ekspor hasil": "Export results",
  "Ekspor invoice": "Export invoices",
  "Ekspor laporan": "Export reports",
  "Ekspor order": "Export orders",
  "Ekspor otorisasi": "Export authorizations",
  "Ekspor ringkasan": "Export summary",
  "Ekspor stok": "Export inventory",
  "Belum dibuat": "Not created yet",
  "Dibuat": "Created",
  "Invoice dibuat.": "Invoice created.",
  "Jadwal operasi dibuat.": "Surgery scheduled.",
  "Order diet dibuat.": "Diet order created.",
  "Order laboratorium dibuat.": "Laboratory order created.",
  "Order radiologi dibuat.": "Radiology order created.",
  "Pengajuan otorisasi dibuat.": "Authorization request created.",
  "Contoh transkrip dimuat · perlu review dokter": "Transcript loaded · physician review required",
  "Mikrofon tidak tersedia. Gunakan transkrip manual.": "Microphone unavailable. Enter the transcript manually.",
  "Rekam percakapan atau tulis transkrip, lalu simpan setelah review.": "Record the conversation or enter a transcript, then save after review.",
  "Rekaman selesai · periksa transkrip": "Recording complete · review transcript",
  "Speech-to-text tidak didukung browser ini. Gunakan transkrip manual atau contoh.": "Speech-to-text is unsupported in this browser. Enter a transcript manually or load an example.",
  "Speech-to-text tidak tersedia. Gunakan transkrip manual.": "Speech-to-text is unavailable. Enter the transcript manually.",
  "Transkrip masih kosong.": "The transcript is empty.",
  "Yth. Verifikator BPJS Kesehatan\nKantor Cabang Jakarta Timur\n\nPerihal: Tanggapan atas": "Dear BPJS Health Verifier\nEast Jakarta Branch Office\n\nSubject: Response to"
});
Object.assign(translations,{
  "Diagnosis utama wajib diisi.": "Primary diagnosis is required.",
  "Nama item wajib diisi.": "Item name is required.",
  "Nama pasien wajib diisi.": "Patient name is required.",
  "Pasien dan item obat wajib diisi.": "Patient and medication are required.",
  "Kelola koneksi SATUSEHAT, VClaim, E-Klaim, FHIR, Aplicare, antrean JKN, dan tanda tangan elektronik.": "Manage SATUSEHAT, VClaim, E-Claim, FHIR, Aplicare, JKN queue, and electronic signature connections.",
  "Pertukaran resep elektronik dan status dispensing.": "Exchange electronic prescriptions and dispensing status.",
  "Resep elektronik": "Electronic prescription",
  "Resep elektronik akan masuk ke antrean dispensing.": "The electronic prescription will enter the dispensing queue.",
  "P07.3 Bayi prematur": "P07.3 Premature infant",
  "Hasil lab bayi": "Infant laboratory results",
  "Resume medis bertanda tangan DPJP": "Medical summary signed by the attending physician",
  "Tanda tangan elektronik dokumen medis dan klaim.": "Electronic signatures for medical and claim documents.",
  "Kirim permintaan benefit check ke penjamin.": "Send a benefits verification request to the insurer.",
  "Satu identitas pasien untuk pendaftaran, layanan klinis, billing, dan klaim.": "One patient identity across registration, clinical services, billing, and claims.",
  "Antrean poliklinik, jadwal DPJP, dan status konsultasi yang tersambung ke rekam medis.": "Outpatient queues, physician schedules, and consultation status linked to medical records.",
  "Catatan perkembangan harian sebagai justifikasi lama rawat": "Daily progress notes supporting the length of stay",
  "Lama rawat perlu justifikasi di catatan perkembangan.": "The length of stay needs justification in progress notes.",
  "Dokumen tervalidasi dan siap dipakai untuk klaim.": "Validated documents are ready for the claim.",
  "Garis putus-putus menandai awal simulasi MAXY AI. Tren ini tidak membuktikan dampak produk.": "The dashed line marks the start of the MAXY AI simulation. This trend does not establish product impact.",
  "Kondisi operasional RS Medika Nusantara hari ini, dengan sinyal penting dari layanan, klaim, dan dokumen.": "Today’s hospital operations, with key signals from services, claims, and documents.",
  "Sinyal operasional yang perlu ditinjau.": "Operational signals requiring review.",
  "Perlu verifikasi identitas": "Identity verification required",
  "Kelola konteks rumah sakit dan unit yang sedang aktif.": "Manage the active hospital and unit context.",
  "Draf disalin": "Draft copied",
  "Draf siap disalin": "Draft ready to copy",
  "Saran diabaikan": "Suggestion dismissed",
  "Saran diabaikan koder.": "Suggestion dismissed by the coder.",
  "Saran koding diabaikan.": "Coding suggestion dismissed.",
  "Permintaan penjaminan": "Coverage request",
  "Permintaan persetujuan": "Approval request",
  "Rutekan ke": "Assign to",
  "Buka intelligence review": "Open intelligence review",
  "Live census seluruh bangsal": "Ward occupancy overview"
});
Object.assign(translations,{
  "Akses seluruh area kerja MAXY AI.": "Access all MAXY AI workspaces.",
  "Baca pola kunjungan, utilisasi, pendapatan, klaim, dan kualitas layanan dari satu tempat.": "Track visits, utilization, revenue, claims, and care quality in one place.",
  "Bed board, census, perpindahan pasien, dan discharge planning dalam satu tampilan operasional.": "Bed board, census, patient transfers, and discharge planning in one operational view.",
  "Buku piutang": "Accounts receivable ledger",
  "Darah lengkap & AGD": "Complete blood count and arterial blood gas",
  "Dokter Spesialis": "Specialist physician",
  "Dua klaim berisiko tinggi dan satu pending dokumen TPA.": "Two high-risk claims and one pending TPA document.",
  "Hasil HbA1c dan gula darah serial": "HbA1c and serial blood glucose results",
  "Hasil ureum, kreatinin dan eGFR": "Urea, creatinine, and eGFR results",
  "Juta rupiah · 7 hari terakhir": "Million rupiah · last 7 days",
  "Majukan": "Advance",
  "Majukan progres": "Advance progress",
  "Majukan status": "Advance status",
  "Nilai persediaan": "Inventory value",
  "Paket lengkap dengan imaging, konsultasi spesialis, dan laporan digital.": "Comprehensive package with imaging, specialist consultations, and digital reports.",
  "Payroll 284 staf berhasil dijalankan.": "Payroll was processed for 284 staff.",
  "Pendapatan layanan, piutang, aging, margin, dan rekap penjamin untuk keputusan harian.": "Service revenue, receivables, aging, margins, and insurer summaries for daily decisions.",
  "Pengiriman berkas klaim dan grouping INA-CBG.": "Claim submission and INA-CBG grouping.",
  "Peserta MCU terdaftar.": "Health screening participant registered.",
  "Pilih fasilitas untuk meninjau area kerja yang tersedia.": "Select a facility to review available workspaces.",
  "Pilih pasien terlebih dahulu.": "Select a patient first.",
  "Pilih peserta terlebih dahulu.": "Select a participant first.",
  "Piutang": "Receivables",
  "Piutang penjamin": "Insurer receivables",
  "Pratinjau awal · verifier belum dijalankan": "Initial preview · verifier has not run",
  "Pre-submission verifier, coding review, pending resolution, dan pengiriman klaim dengan evidence yang dapat ditelusuri.": "Pre-submission verification, coding review, pending resolution, and traceable claim submission.",
  "Rata-rata per kasus · juta rupiah": "Average per case · million rupiah",
  "Raw inap 100% · plafon Rp 150 jt": "Inpatient 100% · coverage limit Rp 150 million",
  "Registrasi": "Registration",
  "Registrasi pasien": "Patient registration",
  "Registrasi pasien baru": "Register new patient",
  "Reimbursement: periksa dan serahkan berkas yang dibutuhkan pasien.": "Reimbursement: review and provide the documents patients need.",
  "Sinkronisasi": "Synchronization",
  "Sinkronisasi ketersediaan tempat tidur.": "Synchronize bed availability.",
  "Sinkronisasi semua integrasi": "Synchronize all integrations",
  "Skrining gizi": "Nutrition screening",
  "Skrining gizi, order diet, alergi, dan distribusi makanan terhubung dengan status rawat inap.": "Nutrition screening, diet orders, allergies, and meal delivery linked to inpatient status.",
  "Surat Eligibilitas Peserta. Bayi Ny. Sari. No RM 00-24-1180. Diagnosis P07.3. Kelas rawat inap perinatologi.": "Participant Eligibility Letter. Infant of Ms. Sari. Medical record 00-24-1180. Diagnosis P07.3. Perinatology inpatient class.",
  "Surat penjaminan akhir": "Final guarantee letter",
  "Surat penjaminan awal": "Initial guarantee letter",
  "TD 100/64 · HR 118 · Suhu 39,2°C": "BP 100/64 · HR 118 · Temperature 39.2°C",
  "TD 118/72 · HR 88 · Suhu 37,1°C": "BP 118/72 · HR 88 · Temperature 37.1°C",
  "Tagihan pasien, penjamin, pembayaran, invoice, dan rekonsiliasi pendapatan dalam satu alur.": "Patient and insurer bills, payments, invoices, and revenue reconciliation in one workflow.",
  "Tambahkan SKU baru ke master persediaan.": "Add a new SKU to the inventory catalog.",
  "Teks dipilih · salin dengan Ctrl/Cmd+C": "Text selected · copy with Ctrl/Cmd+C",
  "Tidak ada teks pada PDF": "No text found in the PDF",
  "Ureum 48 · Kreatinin 1,4": "Urea 48 · Creatinine 1.4",
  "Verifikasi resep, penyiapan obat, serah terima, dan pemantauan stok dalam satu alur.": "Prescription verification, dispensing preparation, handoff, and stock monitoring in one workflow.",
  "Verifikator menilai lama rawat tidak sesuai kelompok; RS belum sepakat.": "The verifier considers the length of stay inconsistent with the grouping; the hospital disagrees.",
  "dengan daftar dokumen yang dibutuhkan": "with a list of required documents",
  "pasien terdaftar": "registered patients",
  "Kurangi stok": "Reduce stock",
  "Ajukan ulang": "Resubmit",
  "Grafik tren": "Trend chart",
  "Field akan dicocokkan dengan master pasien setelah ekstraksi selesai.": "Fields will be matched against patient records after extraction.",
  "Pasien berada dalam alur layanan aktif.": "The patient is in an active care pathway.",
  "Petugas memeriksa ketentuan polis dan respons penjamin sebelum menentukan bagian biaya pasien.": "Staff review policy terms and insurer responses before determining the patient share."
});
Object.assign(translations,{
  "Merekam… bicara secara jelas.": "Recording… speak clearly.",
  "Prioritas klinis, waktu datang, dan status penanganan pasien gawat darurat secara real-time.": "Clinical priority, arrival time, and emergency care status in real time.",
  "142 respons": "142 responses",
  "22 Okt · sekarang": "22 Oct · now",
  "Sekarang": "Now",
  "3 tim anestesi": "3 anesthesia teams",
  "A09 Diare dan gastroenteritis": "A09 Diarrhea and gastroenteritis",
  "Asesmen awal pasien baru": "Initial assessment for a new patient",
  "Asuhan gizi": "Nutrition care",
  "Bagian pasien mengikuti keputusan penjamin contoh dan belum tentu sudah dibayar.": "The patient share follows the insurer decision and may still be unpaid.",
  "Belum dikode": "Not coded yet",
  "Belum diukur": "Not measured yet",
  "Biaya masih berupa estimasi; tagihan final dan keputusan penjamin belum tersedia.": "Costs are still estimates; the final bill and insurer decision are pending.",
  "Booking dan pemanggilan antrean peserta JKN.": "Booking and queue calls for JKN participants."
});
Object.assign(translations,{"inap.":"inpatient."});
var phrases=[
  [
    "worklist lintas unit",
    "cross-unit worklist"
  ],
  [
    "menunggu pemeriksaan",
    "awaiting review"
  ],
  [
    "pasien risiko tinggi",
    "high-risk patient"
  ],
  [
    "menunggu pembayaran",
    "awaiting payment"
  ],
  [
    "menunggu verifikasi",
    "awaiting verification"
  ],
  [
    "menunggu keputusan",
    "awaiting decision"
  ],
  [
    "hasil laboratorium",
    "laboratory results"
  ],
  [
    "diagnosis sekunder",
    "secondary diagnosis"
  ],
  [
    "antrean poliklinik",
    "outpatient queue"
  ],
  [
    "discharge planning",
    "discharge planning"
  ],
  [
    "resume medis final",
    "final medical summary"
  ],
  [
    "pasien rawat jalan",
    "outpatient"
  ],
  [
    "sebelum pengajuan",
    "before submission"
  ],
  [
    "setelah pengajuan",
    "after submission"
  ],
  [
    "hasil pemeriksaan",
    "test results"
  ],
  [
    "status pembayaran",
    "payment status"
  ],
  [
    "status diperbarui",
    "status updated"
  ],
  [
    "worklist specimen",
    "specimen worklist"
  ],
  [
    "pasien rawat inap",
    "inpatient"
  ],
  [
    "selama perawatan",
    "during care"
  ],
  [
    "perlu verifikasi",
    "needs verification"
  ],
  [
    "tidak ada temuan",
    "no findings"
  ],
  [
    "penanggung jawab",
    "owner"
  ],
  [
    "prioritas tinggi",
    "high priority"
  ],
  [
    "prioritas sedang",
    "medium priority"
  ],
  [
    "prioritas rendah",
    "low priority"
  ],
  [
    "pembayaran masuk",
    "incoming payment"
  ],
  [
    "kunjungan pasien",
    "patient encounter"
  ],
  [
    "worklist imaging",
    "imaging worklist"
  ],
  [
    "mengidentifikasi",
    "identifies"
  ],
  [
    "diabetes melitus",
    "diabetes mellitus"
  ],
  [
    "rawat inap aktif",
    "active inpatient care"
  ],
  [
    "perlu perhatian",
    "needs attention"
  ],
  [
    "perlu perbaikan",
    "needs correction"
  ],
  [
    "belum diperiksa",
    "not yet reviewed"
  ],
  [
    "sudah diperiksa",
    "already reviewed"
  ],
  [
    "semua prioritas",
    "all priorities"
  ],
  [
    "pilih fasilitas",
    "select facility"
  ],
  [
    "hasil penunjang",
    "diagnostic results"
  ],
  [
    "catatan perawat",
    "nursing notes"
  ],
  [
    "bukti pelayanan",
    "care evidence"
  ],
  [
    "bukti penunjang",
    "supporting evidence"
  ],
  [
    "status saat ini",
    "current status"
  ],
  [
    "biaya pelayanan",
    "care costs"
  ],
  [
    "nilai pengajuan",
    "submitted amount"
  ],
  [
    "asuransi swasta",
    "private insurance"
  ],
  [
    "jakarta selatan",
    "South Jakarta"
  ],
  [
    "belum terlampir",
    "not yet attached"
  ],
  [
    "sudah terlampir",
    "attached"
  ],
  [
    "selama dirawat",
    "during treatment"
  ],
  [
    "perlu ditinjau",
    "needs review"
  ],
  [
    "perlu tindakan",
    "action needed"
  ],
  [
    "tutup navigasi",
    "close navigation"
  ],
  [
    "catatan klinis",
    "clinical notes"
  ],
  [
    "catatan dokter",
    "physician notes"
  ],
  [
    "dokumen klinis",
    "clinical documents"
  ],
  [
    "kode diagnosis",
    "diagnosis code"
  ],
  [
    "estimasi tarif",
    "estimated tariff"
  ],
  [
    "penjamin kedua",
    "secondary insurer"
  ],
  [
    "antrean pasien",
    "patient queue"
  ],
  [
    "medical scribe",
    "medical scribe"
  ],
  [
    "ditandatangani",
    "signed"
  ],
  [
    "rawat darurat",
    "emergency care"
  ],
  [
    "gawat darurat",
    "emergency"
  ],
  [
    "pasien pulang",
    "discharged patient"
  ],
  [
    "belum selesai",
    "not yet complete"
  ],
  [
    "sudah dibayar",
    "already paid"
  ],
  [
    "buka navigasi",
    "open navigation"
  ],
  [
    "pilih tanggal",
    "select date"
  ],
  [
    "pilih periode",
    "select period"
  ],
  [
    "berkas pasien",
    "patient documents"
  ],
  [
    "kode sekunder",
    "secondary code"
  ],
  [
    "pemilik tugas",
    "task owner"
  ],
  [
    "tindak lanjut",
    "follow-up"
  ],
  [
    "risiko tinggi",
    "high risk"
  ],
  [
    "risiko sedang",
    "moderate risk"
  ],
  [
    "risiko rendah",
    "low risk"
  ],
  [
    "nilai tagihan",
    "billed amount"
  ],
  [
    "total tagihan",
    "total bill"
  ],
  [
    "tagihan final",
    "final bill"
  ],
  [
    "bagian pasien",
    "patient share"
  ],
  [
    "kamar operasi",
    "operating room"
  ],
  [
    "antrean klaim",
    "claims queue"
  ],
  [
    "antrean resep",
    "prescription queue"
  ],
  [
    "reimbursement",
    "reimbursement"
  ],
  [
    "menghubungkan",
    "connects"
  ],
  [
    "menyelesaikan",
    "resolves"
  ],
  [
    "menyinkronkan",
    "synchronizes"
  ],
  [
    "keterlambatan",
    "delay"
  ],
  [
    "dinonaktifkan",
    "disabled"
  ],
  [
    "pasien aktif",
    "active patients"
  ],
  [
    "semua status",
    "all statuses"
  ],
  [
    "semua pasien",
    "all patients"
  ],
  [
    "semua risiko",
    "all risks"
  ],
  [
    "lihat detail",
    "view details"
  ],
  [
    "tutup detail",
    "close details"
  ],
  [
    "pilih pasien",
    "select patient"
  ],
  [
    "pilih status",
    "select status"
  ],
  [
    "resume medis",
    "medical summary"
  ],
  [
    "bukti klinis",
    "clinical evidence"
  ],
  [
    "berkas klaim",
    "claim documents"
  ],
  [
    "status klaim",
    "claim status"
  ],
  [
    "tempat tidur",
    "hospital bed"
  ],
  [
    "stok minimum",
    "minimum stock"
  ],
  [
    "stok farmasi",
    "pharmacy stock"
  ],
  [
    "laboratorium",
    "laboratory"
  ],
  [
    "dikonfirmasi",
    "confirmed"
  ],
  [
    "dikembalikan",
    "returned"
  ],
  [
    "terintegrasi",
    "integrated"
  ],
  [
    "meningkatkan",
    "improves"
  ],
  [
    "diverifikasi",
    "verified"
  ],
  [
    "eligibilitas",
    "eligibility"
  ],
  [
    "resep dokter",
    "physician prescription"
  ],
  [
    "ketersediaan",
    "availability"
  ],
  [
    "disinkronkan",
    "synchronized"
  ],
  [
    "penyelesaian",
    "resolution"
  ],
  [
    "pengembalian",
    "returned"
  ],
  [
    "hiponatremia",
    "hyponatremia"
  ],
  [
    "rawat jalan",
    "outpatient"
  ],
  [
    "rumah sakit",
    "hospital"
  ],
  [
    "pasien baru",
    "new patient"
  ],
  [
    "minggu lalu",
    "last week"
  ],
  [
    "semua tahap",
    "all stages"
  ],
  [
    "semua klaim",
    "all claims"
  ],
  [
    "semua modul",
    "all modules"
  ],
  [
    "lihat semua",
    "view all"
  ],
  [
    "buka detail",
    "open details"
  ],
  [
    "cari pasien",
    "search patients"
  ],
  [
    "rekam medis",
    "electronic medical record"
  ],
  [
    "nilai klaim",
    "claim value"
  ],
  [
    "pendaftaran",
    "registration"
  ],
  [
    "operasional",
    "operations"
  ],
  [
    "sumber daya",
    "resources"
  ],
  [
    "pemeriksaan",
    "examination"
  ],
  [
    "persetujuan",
    "approval"
  ],
  [
    "berlangsung",
    "in progress"
  ],
  [
    "berdasarkan",
    "based on"
  ],
  [
    "membutuhkan",
    "needs"
  ],
  [
    "menampilkan",
    "shows"
  ],
  [
    "menunjukkan",
    "shows"
  ],
  [
    "selanjutnya",
    "next"
  ],
  [
    "menggunakan",
    "uses"
  ],
  [
    "mencocokkan",
    "reconciles"
  ],
  [
    "konfigurasi",
    "configuration"
  ],
  [
    "verifikator",
    "verifier"
  ],
  [
    "pengeluaran",
    "expenditure"
  ],
  [
    "ditambahkan",
    "added"
  ],
  [
    "menambahkan",
    "adds"
  ],
  [
    "dilampirkan",
    "attached"
  ],
  [
    "melampirkan",
    "attaches"
  ],
  [
    "dokumentasi",
    "documentation"
  ],
  [
    "kedaluwarsa",
    "expiry"
  ],
  [
    "eksaserbasi",
    "exacerbation"
  ],
  [
    "preeklamsia",
    "preeclampsia"
  ],
  [
    "apendisitis",
    "appendicitis"
  ],
  [
    "peritonitis",
    "peritonitis"
  ],
  [
    "rawat inap",
    "inpatient"
  ],
  [
    "minggu ini",
    "this week"
  ],
  [
    "bulan lalu",
    "last month"
  ],
  [
    "semua unit",
    "all units"
  ],
  [
    "buka semua",
    "open all"
  ],
  [
    "tutup menu",
    "close menu"
  ],
  [
    "cari klaim",
    "search claims"
  ],
  [
    "pilih role",
    "select role"
  ],
  [
    "pilih unit",
    "select unit"
  ],
  [
    "klaim BPJS",
    "BPJS claims"
  ],
  [
    "order diet",
    "diet order"
  ],
  [
    "pendapatan",
    "revenue"
  ],
  [
    "pembayaran",
    "payment"
  ],
  [
    "verifikasi",
    "verification"
  ],
  [
    "kekurangan",
    "gaps"
  ],
  [
    "kesesuaian",
    "consistency"
  ],
  [
    "memerlukan",
    "requires"
  ],
  [
    "memastikan",
    "ensures"
  ],
  [
    "selesaikan",
    "complete"
  ],
  [
    "divalidasi",
    "validated"
  ],
  [
    "ditugaskan",
    "assigned"
  ],
  [
    "dilengkapi",
    "completed"
  ],
  [
    "terdeteksi",
    "detected"
  ],
  [
    "memberikan",
    "provides"
  ],
  [
    "mengurangi",
    "reduces"
  ],
  [
    "menetapkan",
    "assigns"
  ],
  [
    "menghitung",
    "calculates"
  ],
  [
    "diserahkan",
    "handed over"
  ],
  [
    "berikutnya",
    "next"
  ],
  [
    "distribusi",
    "distribution"
  ],
  [
    "pemantauan",
    "monitoring"
  ],
  [
    "diteruskan",
    "forwarded"
  ],
  [
    "kontribusi",
    "contribution"
  ],
  [
    "elektrolit",
    "electrolyte"
  ],
  [
    "kompetensi",
    "competency"
  ],
  [
    "penerimaan",
    "receipts"
  ],
  [
    "konsultasi",
    "consultation"
  ],
  [
    "diperbarui",
    "updated"
  ],
  [
    "penggunaan",
    "usage"
  ],
  [
    "mengajukan",
    "submits"
  ],
  [
    "ditagihkan",
    "billed"
  ],
  [
    "konfirmasi",
    "confirmation"
  ],
  [
    "ilustratif",
    "illustrative"
  ],
  [
    "diperbaiki",
    "resolved"
  ],
  [
    "klaim baru",
    "new claims"
  ],
  [
    "penjaminan",
    "coverage"
  ],
  [
    "hematokrit",
    "hematocrit"
  ],
  [
    "persalinan",
    "delivery"
  ],
  [
    "hematologi",
    "hematology"
  ],
  [
    "penyebaran",
    "spread"
  ],
  [
    "mendeteksi",
    "detecting"
  ],
  [
    "baru saja",
    "just now"
  ],
  [
    "bulan ini",
    "this month"
  ],
  [
    "tahun ini",
    "this year"
  ],
  [
    "buka menu",
    "open menu"
  ],
  [
    "stok obat",
    "medication stock"
  ],
  [
    "order lab",
    "lab order"
  ],
  [
    "hasil lab",
    "lab results"
  ],
  [
    "bed board",
    "bed board"
  ],
  [
    "pelayanan",
    "care"
  ],
  [
    "penunjang",
    "diagnostics"
  ],
  [
    "radiologi",
    "radiology"
  ],
  [
    "inventori",
    "inventory"
  ],
  [
    "integrasi",
    "integrations"
  ],
  [
    "ringkasan",
    "overview"
  ],
  [
    "kunjungan",
    "visits"
  ],
  [
    "diagnosis",
    "diagnosis"
  ],
  [
    "otorisasi",
    "authorization"
  ],
  [
    "pengajuan",
    "submission"
  ],
  [
    "perbaikan",
    "correction"
  ],
  [
    "prioritas",
    "priority"
  ],
  [
    "keputusan",
    "decision"
  ],
  [
    "aktivitas",
    "activity"
  ],
  [
    "rata-rata",
    "average"
  ],
  [
    "terhubung",
    "connected"
  ],
  [
    "terjadwal",
    "scheduled"
  ],
  [
    "memeriksa",
    "check"
  ],
  [
    "disetujui",
    "approved"
  ],
  [
    "diperiksa",
    "reviewed"
  ],
  [
    "dipanggil",
    "called"
  ],
  [
    "ditemukan",
    "found"
  ],
  [
    "dilakukan",
    "performed"
  ],
  [
    "diberikan",
    "given"
  ],
  [
    "terlambat",
    "late"
  ],
  [
    "terpenuhi",
    "met"
  ],
  [
    "terpantau",
    "monitored"
  ],
  [
    "mendukung",
    "supports"
  ],
  [
    "menyimpan",
    "stores"
  ],
  [
    "mengambil",
    "takes"
  ],
  [
    "memproses",
    "processes"
  ],
  [
    "ilustrasi",
    "illustration"
  ],
  [
    "September",
    "September"
  ],
  [
    "pendukung",
    "supporting"
  ],
  [
    "daftarkan",
    "register"
  ],
  [
    "ekstraksi",
    "extraction"
  ],
  [
    "pengingat",
    "reminder"
  ],
  [
    "perubahan",
    "change"
  ],
  [
    "pencarian",
    "search"
  ],
  [
    "kepatuhan",
    "compliance"
  ],
  [
    "laki-laki",
    "male"
  ],
  [
    "perempuan",
    "female"
  ],
  [
    "memajukan",
    "advance"
  ],
  [
    "digunakan",
    "used"
  ],
  [
    "terlampir",
    "attached"
  ],
  [
    "pembaruan",
    "update"
  ],
  [
    "telaahnya",
    "review"
  ],
  [
    "mendekati",
    "approaching"
  ],
  [
    "kongestif",
    "congestive"
  ],
  [
    "trombosit",
    "platelets"
  ],
  [
    "dehidrasi",
    "dehydration"
  ],
  [
    "sementara",
    "preliminary"
  ],
  [
    "kehamilan",
    "pregnancy"
  ],
  [
    "Penisilin",
    "Penicillin"
  ],
  [
    "hari ini",
    "today"
  ],
  [
    "cashless",
    "cashless"
  ],
  [
    "keuangan",
    "finance"
  ],
  [
    "analitik",
    "analytics"
  ],
  [
    "ikhtisar",
    "overview"
  ],
  [
    "asuransi",
    "insurance"
  ],
  [
    "penjamin",
    "insurer"
  ],
  [
    "spesimen",
    "specimen"
  ],
  [
    "tindakan",
    "procedure"
  ],
  [
    "validasi",
    "validation"
  ],
  [
    "menunggu",
    "awaiting"
  ],
  [
    "beberapa",
    "several"
  ],
  [
    "terhadap",
    "against"
  ],
  [
    "termasuk",
    "including"
  ],
  [
    "menandai",
    "flags"
  ],
  [
    "meninjau",
    "review"
  ],
  [
    "memantau",
    "monitor"
  ],
  [
    "jalankan",
    "run"
  ],
  [
    "hentikan",
    "stop"
  ],
  [
    "diajukan",
    "submitted"
  ],
  [
    "ditinjau",
    "reviewed"
  ],
  [
    "disimpan",
    "saved"
  ],
  [
    "diterima",
    "received"
  ],
  [
    "tersedia",
    "available"
  ],
  [
    "terlihat",
    "visible"
  ],
  [
    "tercatat",
    "recorded"
  ],
  [
    "tertutup",
    "closed"
  ],
  [
    "tertunda",
    "delayed"
  ],
  [
    "terpisah",
    "separate"
  ],
  [
    "mencakup",
    "covers"
  ],
  [
    "membantu",
    "helps"
  ],
  [
    "mengubah",
    "changes"
  ],
  [
    "mengatur",
    "manages"
  ],
  [
    "mengirim",
    "sends"
  ],
  [
    "menerima",
    "receives"
  ],
  [
    "menyusun",
    "prepares"
  ],
  [
    "simulasi",
    "simulation"
  ],
  [
    "November",
    "November"
  ],
  [
    "Desember",
    "December"
  ],
  [
    "Februari",
    "February"
  ],
  [
    "berjalan",
    "ongoing"
  ],
  [
    "terakhir",
    "last"
  ],
  [
    "kelompok",
    "group"
  ],
  [
    "kategori",
    "category"
  ],
  [
    "penyebab",
    "cause"
  ],
  [
    "kualitas",
    "quality"
  ],
  [
    "otomatis",
    "automatic"
  ],
  [
    "potongan",
    "deductions"
  ],
  [
    "obstetri",
    "obstetrics"
  ],
  [
    "pengguna",
    "user"
  ],
  [
    "estimasi",
    "estimate"
  ],
  [
    "terbatas",
    "limited"
  ],
  [
    "terkirim",
    "sent"
  ],
  [
    "tinjauan",
    "review"
  ],
  [
    "berisiko",
    "at risk"
  ],
  [
    "serebral",
    "cerebral"
  ],
  [
    "penyakit",
    "disease"
  ],
  [
    "prematur",
    "premature"
  ],
  [
    "radiolog",
    "radiologist"
  ],
  [
    "lanjutan",
    "follow-up"
  ],
  [
    "berhasil",
    "succeeded"
  ],
  [
    "kemarin",
    "yesterday"
  ],
  [
    "layanan",
    "services"
  ],
  [
    "farmasi",
    "pharmacy"
  ],
  [
    "antrean",
    "queue"
  ],
  [
    "perawat",
    "nurse"
  ],
  [
    "petugas",
    "staff"
  ],
  [
    "bangsal",
    "ward"
  ],
  [
    "dokumen",
    "documents"
  ],
  [
    "catatan",
    "notes"
  ],
  [
    "tagihan",
    "bill"
  ],
  [
    "manfaat",
    "benefits"
  ],
  [
    "laporan",
    "report"
  ],
  [
    "halaman",
    "page"
  ],
  [
    "periode",
    "period"
  ],
  [
    "tanggal",
    "date"
  ],
  [
    "terbaru",
    "latest"
  ],
  [
    "lengkap",
    "complete"
  ],
  [
    "selesai",
    "completed"
  ],
  [
    "sesudah",
    "after"
  ],
  [
    "sebelum",
    "before"
  ],
  [
    "setelah",
    "after"
  ],
  [
    "sebagai",
    "as"
  ],
  [
    "seluruh",
    "all"
  ],
  [
    "melalui",
    "through"
  ],
  [
    "terkait",
    "related to"
  ],
  [
    "periksa",
    "check"
  ],
  [
    "kembali",
    "back"
  ],
  [
    "dibayar",
    "paid"
  ],
  [
    "dikirim",
    "sent"
  ],
  [
    "dicatat",
    "recorded"
  ],
  [
    "terbuka",
    "open"
  ],
  [
    "membuka",
    "opens"
  ],
  [
    "mencari",
    "searches"
  ],
  [
    "membuat",
    "creates"
  ],
  [
    "berikut",
    "following"
  ],
  [
    "Oktober",
    "October"
  ],
  [
    "Januari",
    "January"
  ],
  [
    "Agustus",
    "August"
  ],
  [
    "peserta",
    "participant"
  ],
  [
    "operasi",
    "surgery"
  ],
  [
    "melihat",
    "view"
  ],
  [
    "progres",
    "progress"
  ],
  [
    "selisih",
    "difference"
  ],
  [
    "koreksi",
    "correction"
  ],
  [
    "browser",
    "browser"
  ],
  [
    "riwayat",
    "history"
  ],
  [
    "abaikan",
    "dismiss"
  ],
  [
    "rincian",
    "details"
  ],
  [
    "kontrol",
    "control"
  ],
  [
    "kontras",
    "contrast"
  ],
  [
    "menulis",
    "writes"
  ],
  [
    "absensi",
    "attendance"
  ],
  [
    "koneksi",
    "connection"
  ],
  [
    "rencana",
    "plan"
  ],
  [
    "memilih",
    "choose"
  ],
  [
    "mengisi",
    "fill"
  ],
  [
    "lakukan",
    "perform"
  ],
  [
    "anggota",
    "member"
  ],
  [
    "menagih",
    "bills"
  ],
  [
    "sendiri",
    "independently"
  ],
  [
    "dibantu",
    "assisted"
  ],
  [
    "menjadi",
    "becomes"
  ],
  [
    "setujui",
    "approve"
  ],
  [
    "jawaban",
    "response"
  ],
  [
    "disusun",
    "prepared"
  ],
  [
    "tingkat",
    "rate"
  ],
  [
    "potensi",
    "potential"
  ],
  [
    "dirawat",
    "in care"
  ],
  [
    "lanjuti",
    "up"
  ],
  [
    "jantung",
    "cardiology"
  ],
  [
    "natrium",
    "sodium"
  ],
  [
    "stadium",
    "stage"
  ],
  [
    "sedikit",
    "slight"
  ],
  [
    "penting",
    "important"
  ],
  [
    "pasien",
    "patient"
  ],
  [
    "jadwal",
    "schedule"
  ],
  [
    "dokter",
    "physician"
  ],
  [
    "berkas",
    "files"
  ],
  [
    "risiko",
    "risk"
  ],
  [
    "status",
    "status"
  ],
  [
    "proses",
    "process"
  ],
  [
    "temuan",
    "finding"
  ],
  [
    "sumber",
    "source"
  ],
  [
    "sistem",
    "system"
  ],
  [
    "jumlah",
    "count"
  ],
  [
    "normal",
    "normal"
  ],
  [
    "rendah",
    "low"
  ],
  [
    "sedang",
    "currently"
  ],
  [
    "tinggi",
    "high"
  ],
  [
    "kritis",
    "critical"
  ],
  [
    "bersih",
    "clean"
  ],
  [
    "kosong",
    "empty"
  ],
  [
    "terisi",
    "occupied"
  ],
  [
    "dengan",
    "with"
  ],
  [
    "kepada",
    "to"
  ],
  [
    "hingga",
    "until"
  ],
  [
    "sampai",
    "until"
  ],
  [
    "antara",
    "between"
  ],
  [
    "setiap",
    "each"
  ],
  [
    "kurang",
    "less"
  ],
  [
    "pantau",
    "monitor"
  ],
  [
    "tinjau",
    "review"
  ],
  [
    "simpan",
    "save"
  ],
  [
    "lanjut",
    "continue"
  ],
  [
    "contoh",
    "example"
  ],
  [
    "Selasa",
    "Tuesday"
  ],
  [
    "Minggu",
    "Sunday"
  ],
  [
    "tandai",
    "flag"
  ],
  [
    "kalori",
    "calories"
  ],
  [
    "alergi",
    "allergy"
  ],
  [
    "telaah",
    "review"
  ],
  [
    "durasi",
    "duration"
  ],
  [
    "lokasi",
    "location"
  ],
  [
    "klinik",
    "clinic"
  ],
  [
    "klinis",
    "clinical"
  ],
  [
    "gambar",
    "image"
  ],
  [
    "sesuai",
    "valid"
  ],
  [
    "koding",
    "coding"
  ],
  [
    "aturan",
    "rules"
  ],
  [
    "terima",
    "accept"
  ],
  [
    "unggah",
    "upload"
  ],
  [
    "reagen",
    "reagent"
  ],
  [
    "profil",
    "profile"
  ],
  [
    "sukses",
    "success"
  ],
  [
    "fungsi",
    "function"
  ],
  [
    "toraks",
    "chest"
  ],
  [
    "adalah",
    "is"
  ],
  [
    "target",
    "target"
  ],
  [
    "segera",
    "soon"
  ],
  [
    "bagian",
    "share"
  ],
  [
    "tujuan",
    "destination"
  ],
  [
    "hilang",
    "lost"
  ],
  [
    "pulang",
    "discharged"
  ],
  [
    "tindak",
    "follow"
  ],
  [
    "gudang",
    "warehouse"
  ],
  [
    "infark",
    "infarction"
  ],
  [
    "ginjal",
    "kidney"
  ],
  [
    "kronik",
    "chronic"
  ],
  [
    "anemia",
    "anemia"
  ],
  [
    "ringan",
    "mild"
  ],
  [
    "banyak",
    "many"
  ],
  [
    "lambat",
    "slow"
  ],
  [
    "stabil",
    "stable"
  ],
  [
    "khusus",
    "special"
  ],
  [
    "serial",
    "serial"
  ],
  [
    "pusing",
    "dizziness"
  ],
  [
    "muntah",
    "vomiting"
  ],
  [
    "Lateks",
    "Latex"
  ],
  [
    "klaim",
    "claim"
  ],
  [
    "koder",
    "coder"
  ],
  [
    "kasir",
    "cashier"
  ],
  [
    "kamar",
    "room"
  ],
  [
    "resep",
    "prescription"
  ],
  [
    "hasil",
    "results"
  ],
  [
    "bukti",
    "evidence"
  ],
  [
    "biaya",
    "cost"
  ],
  [
    "polis",
    "policy"
  ],
  [
    "tahap",
    "stage"
  ],
  [
    "tugas",
    "task"
  ],
  [
    "saran",
    "suggestion"
  ],
  [
    "jejak",
    "trail"
  ],
  [
    "fitur",
    "feature"
  ],
  [
    "modul",
    "module"
  ],
  [
    "rekap",
    "recap"
  ],
  [
    "nilai",
    "value"
  ],
  [
    "total",
    "total"
  ],
  [
    "bulan",
    "month"
  ],
  [
    "tahun",
    "year"
  ],
  [
    "waktu",
    "time"
  ],
  [
    "siang",
    "afternoon"
  ],
  [
    "malam",
    "evening"
  ],
  [
    "akhir",
    "final"
  ],
  [
    "aktif",
    "active"
  ],
  [
    "lunas",
    "settled"
  ],
  [
    "valid",
    "valid"
  ],
  [
    "belum",
    "not yet"
  ],
  [
    "sudah",
    "already"
  ],
  [
    "perlu",
    "needs"
  ],
  [
    "dalam",
    "in"
  ],
  [
    "untuk",
    "for"
  ],
  [
    "tanpa",
    "without"
  ],
  [
    "sejak",
    "since"
  ],
  [
    "semua",
    "all"
  ],
  [
    "lebih",
    "more"
  ],
  [
    "lihat",
    "view"
  ],
  [
    "pilih",
    "choose"
  ],
  [
    "hapus",
    "delete"
  ],
  [
    "batal",
    "cancel"
  ],
  [
    "mulai",
    "start"
  ],
  [
    "kirim",
    "send"
  ],
  [
    "dummy",
    "sample"
  ],
  [
    "Maret",
    "March"
  ],
  [
    "April",
    "April"
  ],
  [
    "Jumat",
    "Friday"
  ],
  [
    "Kamis",
    "Thursday"
  ],
  [
    "Senin",
    "Monday"
  ],
  [
    "Sabtu",
    "Saturday"
  ],
  [
    "menit",
    "minutes"
  ],
  [
    "detik",
    "seconds"
  ],
  [
    "tutup",
    "close"
  ],
  [
    "tidak",
    "not"
  ],
  [
    "paket",
    "package"
  ],
  [
    "masuk",
    "incoming"
  ],
  [
    "tetap",
    "remains"
  ],
  [
    "catat",
    "record"
  ],
  [
    "cocok",
    "match"
  ],
  [
    "harus",
    "must"
  ],
  [
    "kasus",
    "case"
  ],
  [
    "pasca",
    "after"
  ],
  [
    "utama",
    "primary"
  ],
  [
    "nomor",
    "number"
  ],
  [
    "hadir",
    "present"
  ],
  [
    "akses",
    "access"
  ],
  [
    "jenis",
    "type"
  ],
  [
    "bukan",
    "not"
  ],
  [
    "cetak",
    "print"
  ],
  [
    "dapat",
    "can"
  ],
  [
    "pajak",
    "tax"
  ],
  [
    "batas",
    "limit"
  ],
  [
    "rawat",
    "care"
  ],
  [
    "dicek",
    "checked"
  ],
  [
    "acuan",
    "reference"
  ],
  [
    "masih",
    "still"
  ],
  [
    "dasar",
    "basis"
  ],
  [
    "salin",
    "copy"
  ],
  [
    "ulang",
    "again"
  ],
  [
    "tarif",
    "tariff"
  ],
  [
    "medis",
    "medical"
  ],
  [
    "turun",
    "decreased"
  ],
  [
    "pasti",
    "certain"
  ],
  [
    "lewat",
    "over"
  ],
  [
    "nyeri",
    "pain"
  ],
  [
    "gagal",
    "failure"
  ],
  [
    "kelas",
    "class"
  ],
  [
    "sesar",
    "cesarean"
  ],
  [
    "ulkus",
    "ulcer"
  ],
  [
    "berat",
    "severe"
  ],
  [
    "cepat",
    "fast"
  ],
  [
    "jelas",
    "clear"
  ],
  [
    "sesak",
    "shortness of breath"
  ],
  [
    "batuk",
    "cough"
  ],
  [
    "demam",
    "fever"
  ],
  [
    "hamil",
    "pregnant"
  ],
  [
    "gizi",
    "nutrition"
  ],
  [
    "staf",
    "staff"
  ],
  [
    "unit",
    "unit"
  ],
  [
    "obat",
    "medication"
  ],
  [
    "kode",
    "code"
  ],
  [
    "alur",
    "workflow"
  ],
  [
    "hari",
    "day"
  ],
  [
    "pagi",
    "morning"
  ],
  [
    "awal",
    "initial"
  ],
  [
    "baru",
    "new"
  ],
  [
    "lama",
    "old"
  ],
  [
    "siap",
    "ready"
  ],
  [
    "luar",
    "outside"
  ],
  [
    "dari",
    "from"
  ],
  [
    "pada",
    "on"
  ],
  [
    "agar",
    "so that"
  ],
  [
    "atau",
    "or"
  ],
  [
    "yang",
    "that"
  ],
  [
    "buka",
    "open"
  ],
  [
    "cari",
    "search"
  ],
  [
    "buat",
    "create"
  ],
  [
    "ubah",
    "change"
  ],
  [
    "muat",
    "load"
  ],
  [
    "Juni",
    "June"
  ],
  [
    "Juli",
    "July"
  ],
  [
    "Rabu",
    "Wednesday"
  ],
  [
    "stok",
    "stock"
  ],
  [
    "klik",
    "click"
  ],
  [
    "nama",
    "name"
  ],
  [
    "umum",
    "general"
  ],
  [
    "lalu",
    "ago"
  ],
  [
    "draf",
    "draft"
  ],
  [
    "akan",
    "will"
  ],
  [
    "akun",
    "account"
  ],
  [
    "saat",
    "when"
  ],
  [
    "umur",
    "age"
  ],
  [
    "anak",
    "pediatrics"
  ],
  [
    "alat",
    "tool"
  ],
  [
    "poin",
    "points"
  ],
  [
    "ppok",
    "COPD"
  ],
  [
    "kaki",
    "foot"
  ],
  [
    "Apt.",
    "Pharmacist"
  ],
  [
    "bed",
    "bed"
  ],
  [
    "dan",
    "and"
  ],
  [
    "ini",
    "this"
  ],
  [
    "itu",
    "that"
  ],
  [
    "Okt",
    "Oct"
  ],
  [
    "Mei",
    "May"
  ],
  [
    "jam",
    "hours"
  ],
  [
    "ada",
    "any"
  ],
  [
    "tim",
    "team"
  ],
  [
    "Tn.",
    "Mr."
  ],
  [
    "Ny.",
    "Ms."
  ],
  [
    "An.",
    "Child"
  ],
  [
    "By.",
    "Baby"
  ],
  [
    "dr.",
    "Dr."
  ],
  [
    "Ns.",
    "Nurse"
  ],
  [
    "Feb",
    "Feb"
  ],
  [
    "Jan",
    "Jan"
  ],
  [
    "Mar",
    "Mar"
  ],
  [
    "Agu",
    "Aug"
  ],
  [
    "Des",
    "Dec"
  ],
  [
    "Jul",
    "Jul"
  ],
  [
    "th",
    "years old"
  ],
  [
    "di",
    "in"
  ],
  [
    "ke",
    "to"
  ]
];
phrases.unshift.apply(phrases,[["kurangi stok", "reduce stock"], ["grafik tren", "trend chart"], ["ajukan ulang", "resubmit"], ["majukan progres", "advance progress"], ["majukan status", "advance status"], ["pencocokan", "matching"], ["dicocokkan", "matched"], ["berada", "is"], ["ketentuan", "terms"], ["menentukan", "determining"], ["tanda tangan elektronik", "electronic signature"], ["corakan bronkovaskular", "bronchovascular markings"], ["garis putus-putus", "dashed line"], ["resep elektronik", "electronic prescription"], ["bertanda tangan", "signed"], ["komponen gaji", "pay components"], ["mendaftarkan", "registering"], ["perinatologi", "perinatology"], ["perkembangan", "progress"], ["wajib diisi", "is required"], ["tanda vital", "vital signs"], ["memvalidasi", "validating"], ["justifikasi", "justification"], ["menunjukkan", "shows"], ["membuktikan", "establish"], ["menyerahkan", "submitting"], ["menjalankan", "running"], ["lobus kanan", "right lobe"], ["foto toraks", "chest X-ray"], ["tervalidasi", "validated"], ["bersama ini", "hereby"], ["hormat kami", "sincerely"], ["elektronik", "electronic"], ["ekspertise", "radiology report"], ["permintaan", "request"], ["pertukaran", "exchange"], ["tersambung", "connected"], ["kesimpulan", "conclusion"], ["signifikan", "significant"], ["ditentukan", "assigned"], ["disiapkan", "prepared"], ["identitas", "identity"], ["diabaikan", "dismissed"], ["tersimpan", "saved"], ["perangkat", "device"], ["infiltrat", "infiltrate"], ["nusantara", "Nusantara"], ["pemberian", "administration"], ["sampaikan", "submit"], ["pendukung", "supporting"], ["kunjungan", "visits"], ["penunjang", "diagnostics"], ["mencatat", "recording"], ["di bawah", "below"], ["didukung", "supported"], ["tersebut", "those"], ["tinjauan", "review"], ["kuitansi", "receipt"], ["tersedia", "available"], ["membayar", "paying"], ["memiliki", "has"], ["rutekan", "assign"], ["dipakai", "used"], ["disalin", "copied"], ["berikut", "following"], ["perifer", "peripheral"], ["tambah", "add"], ["dampak", "impact"], ["kelola", "manage"], ["sinyal", "signal"], ["plafon", "coverage limit"], ["produk", "product"], ["lembar", "sheet"], ["admisi", "admissions"], ["kepala", "head"], ["tampak", "visible"], ["alamat", "address"], ["bawah", "lower"], ["bahwa", "that"], ["perut", "abdomen"], ["aktor", "actor"], ["mohon", "please"], ["bayi", "infant"], ["skor", "score"], ["oleh", "by"], ["tren", "trend"], ["kuat", "strong"], ["kami", "we"]]);
var headingTranslations={
  "Selamat pagi, <em>Maya.</em>": "Good morning, <em>Maya.</em>",
  "Master <em>pasien.</em>": "Patient <em>registry.</em>",
  "Rawat <em>jalan.</em>": "Outpatient <em>care.</em>",
  "Rawat <em>inap.</em>": "Inpatient <em>care.</em>",
  "IGD &amp; <em>triage.</em>": "Emergency &amp; <em>triage.</em>",
  "Kamar <em>operasi.</em>": "Operating <em>rooms.</em>",
  "Farmasi &amp; <em>dispensing.</em>": "Pharmacy &amp; <em>dispensing.</em>",
  "Laboratorium <em>klinik.</em>": "Clinical <em>laboratory.</em>",
  "Radiologi &amp; <em>imaging.</em>": "Radiology &amp; <em>imaging.</em>",
  "Gizi &amp; <em>diet order.</em>": "Nutrition &amp; <em>diet orders.</em>",
  "Medical <em>check-up.</em>": "Medical <em>check-up.</em>",
  "Billing &amp; <em>kasir.</em>": "Billing &amp; <em>payments.</em>",
  "Klaim <em>BPJS.</em>": "BPJS <em>claims.</em>",
  "OCR &amp; <em>dokumen.</em>": "OCR &amp; <em>documents.</em>",
  "Asuransi &amp; <em>TPA.</em>": "Insurance &amp; <em>TPA.</em>",
  "Keuangan &amp; <em>revenue.</em>": "Finance &amp; <em>revenue.</em>",
  "Inventori &amp; <em>logistik.</em>": "Inventory &amp; <em>logistics.</em>",
  "SDM &amp; <em>payroll.</em>": "HR &amp; <em>payroll.</em>",
  "Integrasi &amp; <em>interoperability.</em>": "Integrations &amp; <em>interoperability.</em>",
  "Analitik &amp; <em>kinerja.</em>": "Analytics &amp; <em>performance.</em>",
  "Audit &amp; <em>akses.</em>": "Audit &amp; <em>access.</em>"
};
var headingSources=new WeakMap();
function localizeHeading(el){
  if(el.tagName!=='H1'||!el.closest('.page-head'))return;
  var source=headingSources.get(el)||el.innerHTML;
  if(!Object.prototype.hasOwnProperty.call(headingTranslations,source))return;
  headingSources.set(el,source);
  var next=currentLanguage==='en'?headingTranslations[source]:source;
  if(el.innerHTML!==next)el.innerHTML=next;
}
var storageKey='maxy-hospital-language';
var textSources=new WeakMap();
var attrSources=new WeakMap();
var currentLanguage='id';
var translating=false;
var attributes=['aria-label','aria-description','placeholder','title'];
var ignored='script,style,noscript,[data-dashboard-lang],.dashboard-lang-switch';
function escapeRegExp(value){return value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
phrases.forEach(function(pair){pair.push(new RegExp('(^|[^\\p{L}])('+escapeRegExp(pair[0])+')(?=$|[^\\p{L}])','giu'))});
function translate(value){
  if(Object.prototype.hasOwnProperty.call(translations,value))return translations[value];
  var match=value.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if(!match)return value;
  var core=match[2];
  if(Object.prototype.hasOwnProperty.call(translations,core))return match[1]+translations[core]+match[3];
  var files=[];
  var result=core.replace(/\b[\w.-]+\.(?:pdf|png|jpe?g|csv|xlsx?|docx?)\b/gi,function(file){
    files.push(file);return '__MAXYFILE'+(files.length-1)+'__';
  }),lower=result.toLocaleLowerCase();
  phrases.forEach(function(pair){
    var source=pair[0],target=pair[1];
    if(lower.indexOf(source.toLocaleLowerCase())<0)return;
    result=result.replace(pair[2],function(all,prefix,found){
      if(found===found.toUpperCase()&&found.length>1)return prefix+target.toUpperCase();
      if(found.charAt(0)===found.charAt(0).toUpperCase())return prefix+target.charAt(0).toUpperCase()+target.slice(1);
      return prefix+target;
    });
  });
  result=result.replace(/Rp\s+([\d.,]+)\s+M\b/g,function(_,n){return 'Rp '+n.replace(',', '.')+' billion'})
    .replace(/Rp\s+([\d.,]+)\s+jt\b/gi,function(_,n){return 'Rp '+n.replace(',', '.')+' million'})
    .replace(/Rp\s+([\d.,]+)\s+rb\b/gi,function(_,n){return 'Rp '+n.replace(',', '.')+' thousand'})
    .replace(/(\d)\.(?=\d{3}(?:\D|$))/g,'$1,')
    .replace(/(\d),(\d{1,2})(?=\D|$)/g,'$1.$2');
  result=result.replace(/__MAXYFILE(\d+)__/g,function(_,index){return files[Number(index)]});
  return match[1]+result+match[3];
}
function localizeText(node){
  if(!node.parentElement||node.parentElement.closest(ignored)||!node.nodeValue.trim())return;
  var previous=textSources.get(node),current=node.nodeValue;
  if(!previous||current!==previous.rendered){previous={source:current,rendered:current};textSources.set(node,previous)}
  var next=currentLanguage==='en'?translate(previous.source):previous.source;
  if(current!==next)node.nodeValue=next;
  previous.rendered=next;
}
function localizeAttributes(el){
  if(el.closest(ignored))return;
  if(el.tagName==='OPTION'&&!el.hasAttribute('value'))el.setAttribute('value',el.textContent.trim());
  var sources=attrSources.get(el)||{};
  attributes.forEach(function(name){
    if(!el.hasAttribute(name))return;
    var value=el.getAttribute(name),entry=sources[name];
    if(!entry||value!==entry.rendered){entry={source:value,rendered:value};sources[name]=entry}
    var next=currentLanguage==='en'?translate(entry.source):entry.source;
    if(value!==next)el.setAttribute(name,next);
    entry.rendered=next;
  });
  attrSources.set(el,sources);
}
function localizeSubtree(root){
  if(!root||root.nodeType===3){if(root&&root.nodeType===3)localizeText(root);return}
  if(root.nodeType!==1||root.matches(ignored))return;
  localizeHeading(root);
  localizeAttributes(root);
  var walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    var node=walker.currentNode;
    if(node.nodeType===3)localizeText(node);
    else{localizeHeading(node);localizeAttributes(node)}
  }
}
function updateButtons(){
  Array.prototype.forEach.call(document.querySelectorAll('[data-dashboard-lang]'),function(button){
    var active=button.getAttribute('data-dashboard-lang')===currentLanguage;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',active?'true':'false');
    button.setAttribute('aria-label',button.getAttribute('data-dashboard-lang')==='id'?(currentLanguage==='en'?'Indonesian':'Bahasa Indonesia'):'English');
  });
  Array.prototype.forEach.call(document.querySelectorAll('.dashboard-lang-switch'),function(group){
    group.setAttribute('aria-label',currentLanguage==='en'?'Select language':'Pilih bahasa');
  });
}
function applyLanguage(language){
  currentLanguage=language==='en'?'en':'id';
  document.documentElement.lang=currentLanguage;
  translating=true;
  localizeSubtree(document.body);
  translating=false;
  updateButtons();
  try{localStorage.setItem(storageKey,currentLanguage)}catch(error){}
}
var observer=new MutationObserver(function(records){
  if(translating)return;
  translating=true;
  records.forEach(function(record){
    if(record.type==='characterData')localizeText(record.target);
    else if(record.type==='attributes')localizeAttributes(record.target);
    else Array.prototype.forEach.call(record.addedNodes,localizeSubtree);
  });
  translating=false;
});
observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
document.addEventListener('click',function(event){
  var button=event.target.closest('[data-dashboard-lang]');
  if(button)applyLanguage(button.getAttribute('data-dashboard-lang'));
});
var saved='id';
try{saved=localStorage.getItem(storageKey)||'id'}catch(error){}
applyLanguage(saved);
window.MAXY_DASHBOARD_I18N={setLanguage:applyLanguage,getLanguage:function(){return currentLanguage},translate:translate};
})();
