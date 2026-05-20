export const profile = {
  name: "Phạm Hoàng An",
  role: "AI/ML Intern",
  viRole: "Thực tập sinh AI/ML",
  location: "Hanoi, Vietnam",
  viLocation: "Hà Nội, Việt Nam",
  email: "hoanganpham01739@gmail.com",
  github: "https://github.com/AnHgPham",
  linkedin: "https://www.linkedin.com/in/anpham2005/",
  cv: "/assets/PhamHoangAn_CV_Intern.pdf",
  portrait: {
    webp: [
      "/assets/pham-hoang-an-480.webp 480w",
      "/assets/pham-hoang-an-720.webp 720w",
      "/assets/pham-hoang-an-960.webp 960w",
      "/assets/pham-hoang-an-1200.webp 1200w",
    ].join(", "),
    fallback: "/assets/pham-hoang-an-720.jpg",
  },
};

export const proofSignals = [
  { value: "22", label: "public repos", vi: "repo công khai" },
  { value: "3", label: "AI/CV case studies", vi: "case study AI/CV" },
  { value: "2025", label: "ML specialization", vi: "chứng chỉ ML" },
  { value: "USTH", label: "ICT student", vi: "sinh viên ICT" },
];

export const projects = [
  {
    id: "pickleball",
    title: "Pickleball Match Analysis",
    viTitle: "Phân tích trận đấu Pickleball",
    type: "Computer Vision / Video Intelligence",
    viType: "Computer Vision / Phân tích video",
    repo: "https://github.com/AnHgPham/computer-vision-pickleball-detection-court",
    demo: "https://drive.google.com/file/d/1-T7m2KjSCVFxOKF3X5jqs_or0lnsc-L7/view?usp=sharing",
    problem:
      "Turn match footage into measurable signals: court geometry, ball/player tracking, and reviewable outputs.",
    viProblem:
      "Chuyển video trận đấu thành tín hiệu có thể đo: hình học sân, tracking bóng/người chơi và output có thể kiểm tra.",
    approach:
      "Built a Python pipeline for court keypoints, YOLO detections, temporal smoothing, homography, minimap, and heatmap export.",
    viApproach:
      "Xây pipeline Python cho keypoint sân, YOLO detection, làm mượt theo thời gian, homography, minimap và xuất heatmap.",
    evidence:
      "12 court keypoints, 4-stage ball tracking cascade, 2D court projection, annotated video output.",
    viEvidence:
      "12 keypoint sân, cascade tracking bóng 4 bước, chiếu tọa độ lên sân 2D và video output đã annotate.",
    algorithmFlow: [
      {
        key: "detect",
        label: "Detect",
        viLabel: "Detect",
        algorithm: "YOLO keypoints",
        viAlgorithm: "YOLO keypoints",
        detail: "Locate court, ball, and player candidates from match frames.",
        viDetail: "Xác định sân, bóng và người chơi từ từng frame trận đấu.",
      },
      {
        key: "track",
        label: "Track",
        viLabel: "Track",
        algorithm: "Kalman + temporal smoothing",
        viAlgorithm: "Kalman + làm mượt theo thời gian",
        detail: "Stabilize detections before turning motion into useful signals.",
        viDetail: "Ổn định detection trước khi chuyển chuyển động thành tín hiệu có ích.",
      },
      {
        key: "project",
        label: "Project",
        viLabel: "Chiếu tọa độ",
        algorithm: "Homography",
        viAlgorithm: "Homography",
        detail: "Map image-space movement onto a 2D court reference.",
        viDetail: "Chuyển chuyển động trên ảnh sang mặt sân 2D tham chiếu.",
      },
      {
        key: "review",
        label: "Review",
        viLabel: "Kiểm tra",
        algorithm: "Heatmap aggregation",
        viAlgorithm: "Tổng hợp heatmap",
        detail: "Export minimap, heatmap, and annotated video for inspection.",
        viDetail: "Xuất minimap, heatmap và video annotate để kiểm tra.",
      },
    ],
    signals: {
      headline: "Tracking pipeline with geometry-aware review outputs.",
      viHeadline: "Pipeline tracking có output kiểm tra dựa trên hình học sân.",
      complexity: "Frame loop · detection cascade · projection matrix",
      viComplexity: "Vòng lặp frame · detection cascade · ma trận chiếu",
      evidence: ["Demo video", "12 court keypoints", "Minimap + heatmap"],
      viEvidence: ["Video demo", "12 keypoint sân", "Minimap + heatmap"],
    },
    githubProof: ["Demo video", "Pipeline scripts", "Annotated output"],
    stack: ["YOLOv8-Pose", "OpenCV", "Kalman Filter", "Homography", "Python"],
  },
  {
    id: "kws",
    title: "Open-Set Keyword Spotting",
    viTitle: "Nhận diện từ khóa Open-Set",
    type: "Few-Shot Audio ML",
    viType: "Audio ML few-shot",
    repo: "https://github.com/AnHgPham/DoAnTotNghiep",
    demo: "",
    problem:
      "Detect custom keywords from a few examples while rejecting unknown audio in streaming use cases.",
    viProblem:
      "Nhận diện từ khóa tùy chỉnh từ rất ít mẫu, đồng thời từ chối âm thanh ngoài tập trong luồng streaming.",
    approach:
      "Implemented enrollment with prototype embeddings, thresholding, stream segmentation, voting, and cooldown control.",
    viApproach:
      "Triển khai enrollment bằng prototype embeddings, thresholding, chia đoạn stream, voting và cooldown control.",
    evidence:
      "3-5 sample enrollment, microphone streaming flow, open-set rejection, Colab/local runbooks.",
    viEvidence:
      "Đăng ký 3-5 mẫu, flow microphone streaming, cơ chế open-set rejection và runbook cho Colab/local.",
    algorithmFlow: [
      {
        key: "segment",
        label: "Segment",
        viLabel: "Chia đoạn",
        algorithm: "Sliding window stream",
        viAlgorithm: "Sliding window stream",
        detail: "Split microphone audio into inference windows.",
        viDetail: "Chia audio microphone thành các cửa sổ inference.",
      },
      {
        key: "embed",
        label: "Embed",
        viLabel: "Embedding",
        algorithm: "Prototype embeddings",
        viAlgorithm: "Prototype embeddings",
        detail: "Represent each enrolled keyword with a compact prototype.",
        viDetail: "Biểu diễn mỗi từ khóa đã đăng ký bằng prototype gọn.",
      },
      {
        key: "score",
        label: "Score",
        viLabel: "Chấm điểm",
        algorithm: "Similarity threshold",
        viAlgorithm: "Ngưỡng similarity",
        detail: "Compare stream windows against enrolled keyword prototypes.",
        viDetail: "So sánh cửa sổ audio với prototype của từ khóa.",
      },
      {
        key: "reject",
        label: "Reject",
        viLabel: "Từ chối",
        algorithm: "Voting + cooldown",
        viAlgorithm: "Voting + cooldown",
        detail: "Reduce false triggers and reject unknown audio.",
        viDetail: "Giảm kích hoạt sai và từ chối âm thanh ngoài tập.",
      },
    ],
    signals: {
      headline: "Few-shot streaming recognition with explicit rejection logic.",
      viHeadline: "Nhận diện streaming few-shot với logic từ chối rõ ràng.",
      complexity: "Window queue · prototype distance · threshold gate",
      viComplexity: "Hàng đợi window · khoảng cách prototype · cổng ngưỡng",
      evidence: ["3-5 sample enrollment", "Open-set rejection", "Colab/local runbooks"],
      viEvidence: ["Đăng ký 3-5 mẫu", "Open-set rejection", "Runbook Colab/local"],
    },
    githubProof: ["Enrollment flow", "Streaming inference", "Runbooks"],
    stack: ["Python", "Audio ML", "Embeddings", "Open-set", "Streaming"],
  },
  {
    id: "waste",
    title: "Waste Classification System",
    viTitle: "Hệ thống phân loại rác",
    type: "Deep Learning / Real-Time CV",
    viType: "Deep Learning / Computer Vision thời gian thực",
    repo: "https://github.com/AnHgPham/waste_classifier",
    demo: "",
    problem:
      "Make waste recognition usable beyond training notebooks: image input, webcam inference, and evaluation.",
    viProblem:
      "Đưa bài toán phân loại rác ra khỏi notebook: xử lý ảnh, inference webcam và đánh giá model.",
    approach:
      "Combined MobileNetV2 classification and YOLOv8 detection for training, evaluation, and real-time demos.",
    viApproach:
      "Kết hợp MobileNetV2 classification và YOLOv8 detection cho training, evaluation và demo thời gian thực.",
    evidence:
      "10-class recognition, transfer learning, webcam labels, evaluation artifacts, TFLite path.",
    viEvidence:
      "Nhận diện 10 lớp, transfer learning, label webcam, artifact đánh giá và hướng chuyển sang TFLite.",
    algorithmFlow: [
      {
        key: "input",
        label: "Input",
        viLabel: "Input",
        algorithm: "Image / webcam stream",
        viAlgorithm: "Ảnh / webcam stream",
        detail: "Handle still images and live webcam frames.",
        viDetail: "Xử lý ảnh tĩnh và frame từ webcam.",
      },
      {
        key: "infer",
        label: "Infer",
        viLabel: "Inference",
        algorithm: "MobileNetV2 + YOLO",
        viAlgorithm: "MobileNetV2 + YOLO",
        detail: "Run classification and detection paths for practical demos.",
        viDetail: "Chạy luồng classification và detection cho demo thực tế.",
      },
      {
        key: "rank",
        label: "Rank",
        viLabel: "Xếp hạng",
        algorithm: "Top-k confidence",
        viAlgorithm: "Top-k confidence",
        detail: "Surface class confidence instead of a black-box label.",
        viDetail: "Hiển thị độ tin cậy theo lớp thay vì chỉ trả về nhãn.",
      },
      {
        key: "export",
        label: "Export",
        viLabel: "Xuất",
        algorithm: "Evaluation + TFLite path",
        viAlgorithm: "Evaluation + hướng TFLite",
        detail: "Keep a path from training artifact to lightweight inference.",
        viDetail: "Giữ đường đi từ artifact training đến inference nhẹ.",
      },
    ],
    signals: {
      headline: "Classification system shaped for webcam and edge-ready demos.",
      viHeadline: "Hệ thống classification hướng tới webcam và demo edge-ready.",
      complexity: "Top-k rank · class route · edge export path",
      viComplexity: "Xếp hạng top-k · định tuyến lớp · hướng export edge",
      evidence: ["10 classes", "Webcam labels", "Evaluation artifacts"],
      viEvidence: ["10 lớp", "Label webcam", "Artifact đánh giá"],
    },
    githubProof: ["Training workflow", "Webcam inference", "TFLite direction"],
    stack: ["TensorFlow", "MobileNetV2", "YOLOv8", "TFLite", "OpenCV"],
  },
];

export const capabilityGroups = [
  {
    title: "Modeling Core",
    viTitle: "Lõi mô hình",
    text: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, model evaluation.",
    vi: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, đánh giá model.",
  },
  {
    title: "Signal + Geometry",
    viTitle: "Tín hiệu + hình học",
    text: "YOLO, OpenCV, keypoints, tracking, homography, audio segmentation.",
    vi: "YOLO, OpenCV, keypoints, tracking, homography, chia đoạn audio.",
  },
  {
    title: "Inference Systems",
    viTitle: "Hệ thống inference",
    text: "Real-time loops, threshold gates, top-k confidence, webcam and microphone demos.",
    vi: "Vòng lặp thời gian thực, cổng ngưỡng, top-k confidence, demo webcam và microphone.",
  },
  {
    title: "Evaluation Evidence",
    viTitle: "Bằng chứng đánh giá",
    text: "Annotated outputs, heatmaps, evaluation artifacts, repo-backed demos.",
    vi: "Output annotate, heatmap, artifact đánh giá, demo có repo kiểm tra.",
  },
  {
    title: "Reproducibility",
    viTitle: "Khả năng tái lập",
    text: "Python workflows, notebooks to scripts, runbooks, Git/GitHub, Linux CLI.",
    vi: "Workflow Python, chuyển notebook thành script, runbook, Git/GitHub, Linux CLI.",
  },
];

export const timeline = [
  {
    period: "2023 - 2026",
    title: "USTH - Information and Communication Technology",
    viTitle: "USTH - Công nghệ Thông tin và Truyền thông",
    text: "Undergraduate ICT program focused on programming, AI/ML, computer vision, and applied software projects.",
    viText:
      "Chương trình đại học ICT tập trung vào lập trình, AI/ML, computer vision và các dự án phần mềm ứng dụng.",
  },
  {
    period: "2025",
    title: "Machine Learning Specialization - Stanford / DeepLearning.AI",
    viTitle: "Machine Learning Specialization - Stanford / DeepLearning.AI",
    text: "Coursera specialization in supervised learning, advanced learning algorithms, and practical ML foundations.",
    viText:
      "Chứng chỉ Coursera về supervised learning, thuật toán học máy nâng cao và nền tảng ML thực hành.",
  },
  {
    period: "2020 - 2023",
    title: "Chu Van An High School - Informatics Class",
    viTitle: "THPT Chu Văn An - Lớp chuyên Tin",
    text: "Informatics track with early foundations in programming and computational thinking.",
    viText: "Lớp chuyên Tin với nền tảng sớm về lập trình và tư duy tính toán.",
  },
];
